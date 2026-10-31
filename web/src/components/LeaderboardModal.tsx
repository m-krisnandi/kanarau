import React, { useEffect, useState } from 'react';
import { Trophy, Medal, Flame, Zap, X, Crown, Sparkles, TrendingUp, Users } from 'lucide-react';
import { leaderboardApi } from '@/services/api';
import type { LeaderboardData, LeaderboardEntry } from '@/types';
import { useTranslation } from '@/stores/languageStore';
import { useAuthStore } from '@/stores/authStore';
import { useCourseStore, TrackCode } from '@/stores/courseStore';
import { calculateUserLevel } from '@/utils/levelHelper';
import {
  getEffectiveUserXp,
  getTrackUserXp,
  getUserKey,
  computeTrackLocalStreak,
} from '@/utils/userProgressHelper';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TRACKS: { code: TrackCode; flag: string; label: string }[] = [
  { code: 'JA', flag: '🇯🇵', label: 'JLPT' },
  { code: 'ID', flag: '🇮🇩', label: 'BIPA' },
  { code: 'MY', flag: '🇲🇲', label: 'Myanmar' },
  { code: 'EN', flag: '🇬🇧', label: 'English' },
];

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useTranslation();
  const user = useAuthStore((state) => state.user);
  const activeTrack = useCourseStore((state) => state.activeTrack);
  const [selectedTrack, setSelectedTrack] = useState<TrackCode>(activeTrack || 'JA');
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [loading, setLoading] = useState(true);

  // Sync selectedTrack with activeTrack whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      setSelectedTrack(activeTrack || 'JA');
    }
  }, [isOpen, activeTrack]);

  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    async function fetchLeaderboard() {
      setLoading(true);
      try {
        const res = await leaderboardApi.getLeaderboard(selectedTrack);
        if (isMounted && res?.data) {
          setData(res.data);
        }
      } catch (err) {
        console.error('Failed to load leaderboard', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    void fetchLeaderboard();
    return () => {
      isMounted = false;
    };
  }, [isOpen, selectedTrack]);

  const userKey = getUserKey(user);
  const effectiveTrackXp =
    selectedTrack === 'JA'
      ? getEffectiveUserXp(user)
      : getTrackUserXp(user, selectedTrack);

  // Sync authStore if stored user total_xp is lower than their effective progress XP (Japanese track only)
  useEffect(() => {
    if (selectedTrack === 'JA' && user && (user.total_xp || 0) < effectiveTrackXp) {
      useAuthStore.setState((state) => {
        if (!state.user) return state;
        return {
          ...state,
          user: {
            ...state.user,
            total_xp: effectiveTrackXp,
          },
        };
      });
    }
  }, [user, effectiveTrackXp, selectedTrack]);

  if (!isOpen) return null;

  const myName = (user?.displayName || user?.name || '').trim().toLowerCase();
  let foundMeInTop = false;

  const topUsers: LeaderboardEntry[] = (data?.top_users || []).map((u) => {
    const isMe = Boolean(
      u.is_current_user ||
      (user?.id && String(u.user_id) === String(user.id)) ||
      (myName && u.display_name && u.display_name.trim().toLowerCase() === myName)
    );
    if (isMe) {
      foundMeInTop = true;
      const effectiveXp = Math.max(u.total_xp || 0, effectiveTrackXp);
      const lvlInfo = calculateUserLevel(effectiveXp, language);
      const streak = selectedTrack === 'JA'
        ? Math.max(u.streak || 0, user?.streak || 0)
        : computeTrackLocalStreak(userKey, selectedTrack, u.streak || 0);
      return {
        ...u,
        is_current_user: true,
        display_name: user?.displayName || user?.name || u.display_name,
        total_xp: effectiveXp,
        gamification_level: lvlInfo.level,
        level_title: lvlInfo.title,
        streak,
      };
    }
    return u;
  });

  // If user has earned XP or is logged in and not found in top_users list:
  if (!foundMeInTop && (user || effectiveTrackXp > 0)) {
    const fallbackId = typeof user?.id === 'number' ? user.id : (Number(user?.id) || 999999);
    const fallbackName = user?.displayName || user?.name || 'Murid Kanarau';
    const fallbackStreak = selectedTrack === 'JA'
      ? (user?.streak || 1)
      : computeTrackLocalStreak(userKey, selectedTrack, data?.current_user_entry?.streak || 0);
    const fallbackLevel = selectedTrack === 'JA' ? (user?.current_level || 'N2') : `${selectedTrack} A1`;
    const lvlInfo = calculateUserLevel(effectiveTrackXp, language);

    topUsers.push({
      rank: 0,
      user_id: fallbackId,
      display_name: fallbackName,
      total_xp: effectiveTrackXp,
      gamification_level: lvlInfo.level,
      level_title: lvlInfo.title,
      streak: fallbackStreak,
      jlpt_level: fallbackLevel,
      is_current_user: true,
    });
  }

  // Re-sort so current user is positioned accurately based on XP
  topUsers.sort((a, b) => {
    if (b.total_xp !== a.total_xp) {
      return b.total_xp - a.total_xp;
    }
    if (a.is_current_user) return -1;
    if (b.is_current_user) return 1;
    return (b.streak || 0) - (a.streak || 0);
  });

  // Re-rank after sorting
  topUsers.forEach((u, idx) => {
    u.rank = idx + 1;
  });

  const currentRankInAll = topUsers.find((u) => u.is_current_user)?.rank;
  const displayTopUsers = topUsers.slice(0, 30);

  const top1 = displayTopUsers[0];
  const top2 = displayTopUsers[1];
  const top3 = displayTopUsers[2];
  const remainingUsers = displayTopUsers.slice(3);

  const rawMyEntry = data?.current_user_entry;
  const myTotalXp = Math.max(rawMyEntry?.total_xp || 0, effectiveTrackXp);
  const myLevelInfo = calculateUserLevel(myTotalXp, language);
  const numericUserId = (typeof user?.id === 'number' ? user.id : Number(user?.id)) || rawMyEntry?.user_id || 0;
  const myTrackStreak = selectedTrack === 'JA'
    ? Math.max(rawMyEntry?.streak || 0, user?.streak || 1)
    : computeTrackLocalStreak(userKey, selectedTrack, rawMyEntry?.streak || 0);

  const myEntry: LeaderboardEntry | null = (user || effectiveTrackXp > 0)
    ? {
        rank: currentRankInAll || rawMyEntry?.rank || (displayTopUsers.length + 1),
        user_id: numericUserId,
        display_name: user?.displayName || user?.name || rawMyEntry?.display_name || 'Murid Kanarau',
        total_xp: myTotalXp,
        gamification_level: myLevelInfo.level,
        level_title: myLevelInfo.title,
        streak: myTrackStreak,
        jlpt_level: selectedTrack === 'JA' ? (user?.current_level || rawMyEntry?.jlpt_level || 'N2') : `${selectedTrack} A1`,
        is_current_user: true,
      }
    : null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-[#FAF8F5] dark:bg-[#121826] rounded-3xl shadow-2xl border border-stone-200 dark:border-slate-800 flex flex-col max-h-[90vh] overflow-hidden cursor-default"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-stone-200 dark:border-slate-800 flex items-center justify-between bg-white/70 dark:bg-[#151D2E]/80 backdrop-blur-md">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-200 dark:border-amber-900/50 shadow-2xs">
              <Trophy className="w-5 h-5 fill-amber-500 text-amber-600" />
            </div>
            <div>
              <h2 className="text-base font-bold font-mincho text-stone-900 dark:text-white flex items-center space-x-1.5">
                <span>{t.leaderboard.title}</span>
                <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  Top 30
                </span>
              </h2>
              <p className="text-[11px] text-stone-500 dark:text-slate-400">
                {t.leaderboard.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Track Selector Tabs */}
        <div className="px-4 py-2.5 bg-stone-100/70 dark:bg-slate-900/60 border-b border-stone-200/80 dark:border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {TRACKS.map((trk) => {
            const isSelected = selectedTrack === trk.code;
            return (
              <button
                key={trk.code}
                type="button"
                onClick={() => setSelectedTrack(trk.code)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-stone-600 dark:text-slate-300 hover:bg-stone-200/70 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700'
                }`}
              >
                <span className="text-sm leading-none">{trk.flag}</span>
                <span>{trk.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {loading ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-10 h-10 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xs text-stone-500 dark:text-slate-400 font-sans">
                {t.leaderboard.title}...
              </p>
            </div>
          ) : displayTopUsers.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <Users className="w-12 h-12 text-stone-300 dark:text-slate-600 mx-auto" />
              <p className="text-xs text-stone-500 dark:text-slate-400">
                {t.leaderboard.empty}
              </p>
            </div>
          ) : (
            <>
              {/* Podium (Top 3) */}
              <div className="grid grid-cols-3 gap-2 pt-2 items-end">
                {/* 2nd Place */}
                {top2 ? (
                  <div className="flex flex-col items-center">
                    <div className="relative mb-2">
                      <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-linear-to-b from-slate-200 to-slate-400 p-0.5 shadow-md flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center font-bold text-slate-700 dark:text-slate-200 text-sm">
                          {top2.display_name.slice(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-slate-500 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                        2
                      </span>
                    </div>
                    <span className="text-xs font-bold text-stone-900 dark:text-white truncate max-w-[85px] text-center">
                      {top2.display_name}
                    </span>
                    <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">
                      Lv. {calculateUserLevel(top2.total_xp, language).level}
                    </span>
                    <span className="text-[10px] text-stone-500 dark:text-slate-400 font-sans">
                      {top2.total_xp} XP
                    </span>
                    <div className="w-full h-18 bg-linear-to-t from-slate-300/40 to-slate-200/20 dark:from-slate-800 dark:to-slate-900/40 rounded-t-xl mt-2 flex items-center justify-center border-t border-slate-300 dark:border-slate-700">
                      <Medal className="w-6 h-6 text-slate-400" />
                    </div>
                  </div>
                ) : <div />}

                {/* 1st Place */}
                {top1 && (
                  <div className="flex flex-col items-center">
                    <Crown className="w-6 h-6 text-amber-500 fill-amber-400 -mb-1 animate-bounce" />
                    <div className="relative mb-2">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-linear-to-b from-amber-300 via-amber-400 to-amber-600 p-0.5 shadow-lg flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center font-bold text-amber-600 dark:text-amber-400 text-base">
                          {top1.display_name.slice(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-sm">
                        1
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-stone-900 dark:text-white truncate max-w-[100px] text-center">
                      {top1.display_name}
                    </span>
                    <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400">
                      Lv. {calculateUserLevel(top1.total_xp, language).level} · {calculateUserLevel(top1.total_xp, language).title}
                    </span>
                    <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 font-sans">
                      {top1.total_xp} XP
                    </span>
                    <div className="w-full h-24 bg-linear-to-t from-amber-200/60 via-amber-100/40 to-transparent dark:from-amber-950/60 dark:to-slate-900/40 rounded-t-2xl mt-2 flex items-center justify-center border-t-2 border-amber-400">
                      <Trophy className="w-8 h-8 text-amber-500 fill-amber-400" />
                    </div>
                  </div>
                )}

                {/* 3rd Place */}
                {top3 ? (
                  <div className="flex flex-col items-center">
                    <div className="relative mb-2">
                      <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-linear-to-b from-amber-600 to-amber-800 p-0.5 shadow-md flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center font-bold text-amber-800 dark:text-amber-300 text-sm">
                          {top3.display_name.slice(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-amber-700 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                        3
                      </span>
                    </div>
                    <span className="text-xs font-bold text-stone-900 dark:text-white truncate max-w-[85px] text-center">
                      {top3.display_name}
                    </span>
                    <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">
                      Lv. {calculateUserLevel(top3.total_xp, language).level}
                    </span>
                    <span className="text-[10px] text-stone-500 dark:text-slate-400 font-sans">
                      {top3.total_xp} XP
                    </span>
                    <div className="w-full h-14 bg-linear-to-t from-amber-700/30 to-amber-700/10 dark:from-amber-950/40 dark:to-slate-900/40 rounded-t-xl mt-2 flex items-center justify-center border-t border-amber-700/40">
                      <Medal className="w-5 h-5 text-amber-700 dark:text-amber-500" />
                    </div>
                  </div>
                ) : <div />}
              </div>

              {/* Ranks 4+ List */}
              {remainingUsers.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  {remainingUsers.map((item) => {
                    const lvlInfo = calculateUserLevel(item.total_xp, language);
                    return (
                      <div
                        key={item.user_id}
                        className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                          item.is_current_user
                            ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-300 dark:border-indigo-700 shadow-xs'
                            : 'bg-white/80 dark:bg-[#151D2E] border-stone-200/80 dark:border-slate-800 hover:border-stone-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <span className="w-6 text-center text-xs font-bold text-stone-400 dark:text-slate-500">
                            #{item.rank}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 flex items-center justify-center font-bold text-xs shrink-0">
                            {item.display_name.slice(0, 2).toUpperCase()}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center space-x-1.5">
                              <span className="text-xs font-bold text-stone-900 dark:text-white truncate">
                                {item.display_name}
                              </span>
                              {item.is_current_user && (
                                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-indigo-600 text-white shrink-0">
                                  You
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-stone-500 dark:text-slate-400 truncate">
                              Lv. {lvlInfo.level} • {lvlInfo.title}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 shrink-0">
                          {item.streak > 0 && (
                            <div className="flex items-center text-[10px] font-bold text-amber-600 dark:text-amber-400">
                              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 mr-0.5" />
                              <span>{item.streak}d</span>
                            </div>
                          )}
                          <div className="text-right">
                            <span className="text-xs font-extrabold text-indigo-700 dark:text-indigo-400 font-sans">
                              {item.total_xp}
                            </span>
                            <span className="text-[9px] text-stone-400 dark:text-slate-500 ml-0.5">
                              XP
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>

        {/* Current User Sticky Bar */}
        {myEntry && (
          <div className="p-3.5 sm:p-4 bg-linear-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white border-t border-indigo-800/60 shadow-inner flex items-center justify-between">
            <div className="flex items-center space-x-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center font-extrabold text-sm border border-white/20">
                #{myEntry.rank}
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold text-indigo-100 flex items-center space-x-1">
                  <span>{t.leaderboard.yourRank}</span>
                  <Sparkles className="w-3 h-3 text-amber-300" />
                </span>
                <p className="text-[11px] text-indigo-200 font-sans font-medium">
                  Lv. {calculateUserLevel(myEntry.total_xp, language).level} • {calculateUserLevel(myEntry.total_xp, language).title}
                </p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <div className="text-sm font-extrabold text-amber-300 font-sans flex items-center justify-end space-x-1">
                <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>{myEntry.total_xp} EXP</span>
              </div>
              <p className="text-[9px] text-indigo-300">
                {t.leaderboard.competePrompt}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
