import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { useThemeStore } from '@/stores/themeStore';
import { authApi, feedbackApi } from '@/services/api';
import { useTranslation } from '@/stores/languageStore';
import { LANGUAGE_OPTIONS } from '@/locales/translations';
import type { JLPTLevel } from '@/types';
import { TanyaAiModal } from './TanyaAiModal';
import {
  X,
  Home,
  Sparkles,
  ArrowUpCircle,
  ArrowDownCircle,
  Bell,
  AlertTriangle,
  UserCheck,
  Settings,
  LogOut,
  LogIn,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  Send,
  Lock,
  Sun,
  Moon,
  Link2,
  Unlink,
  ShieldCheck,
} from 'lucide-react';

interface SettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type SubModalType = 'discord' | 'notif' | 'bug' | 'profile' | 'study_settings' | null;

export const SettingsDrawer: React.FC<SettingsDrawerProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const storeLevel = useAuthStore((state) => state.currentLevel);
  const setLevel = useAuthStore((state) => state.setLevel);
  const logout = useAuthStore((state) => state.logout);
  const updateDiscord = useAuthStore((state) => state.updateDiscord);
  const disconnectDiscord = useAuthStore((state) => state.disconnectDiscord);
  const updateProfile = useAuthStore((state) => state.updateProfile);

  const { theme, setTheme } = useThemeStore();
  const { language, setLanguage, t } = useTranslation();
  const [tanyaAiOpen, setTanyaAiOpen] = useState(false);
  const [activeSubModal, setActiveSubModal] = useState<SubModalType>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Profile Form State
  const [profileName, setProfileName] = useState(user?.name || '');

  // Password Change State
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);

  // Discord State & Form
  const [discordInputUser, setDiscordInputUser] = useState(user?.discord_username || '');
  const [discordInputWebhook, setDiscordInputWebhook] = useState(user?.discord_webhook_url || '');
  const [discordInputNotif, setDiscordInputNotif] = useState(user?.discord_notifications_enabled ?? true);
  const [discordLoading, setDiscordLoading] = useState(false);
  const [discordTesting, setDiscordTesting] = useState(false);
  const [discordFeedback, setDiscordFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Sync state when user changes
  useEffect(() => {
    if (user) {
      setProfileName(user.name || '');
      setDiscordInputUser(user.discord_username || '');
      setDiscordInputWebhook(user.discord_webhook_url || '');
      setDiscordInputNotif(user.discord_notifications_enabled ?? true);
    }
  }, [user]);

  // Bug Report State
  const [bugCategory, setBugCategory] = useState('qna');
  const [bugDesc, setBugDesc] = useState('');

  // Notification State
  const [notifMorning, setNotifMorning] = useState('07:00');
  const [notifEvening, setNotifEvening] = useState('20:00');
  const [notifActive, setNotifActive] = useState(true);

  // Study Settings State
  const [defaultSpeed, setDefaultSpeed] = useState('1.15x');
  const [autoRuby, setAutoRuby] = useState(true);

  if (!isOpen) return null;

  const currentLevel = (storeLevel || user?.current_level || 'N2') as JLPTLevel;
  const isDiscordLinked = Boolean(user?.discord_username);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleSelectLevel = (lvl: JLPTLevel) => {
    setLevel(lvl);
    triggerToast(t.settings.levelSwitched(lvl));
  };

  const handleLogout = () => {
    logout();
    onClose();
    navigate('/login');
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profileName.trim()) return;
    updateProfile(profileName.trim());
    triggerToast(t.settings.nameSaved);
    setActiveSubModal(null);
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);
    setPasswordSuccess(null);

    if (newPassword.length < 6) {
      setPasswordError(t.settings.passwordMinPlaceholder);
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError(t.login.passwordMismatch);
      return;
    }

    setPasswordLoading(true);
    try {
      await authApi.changePassword(newPassword);
      setPasswordSuccess(language === 'my' ? 'စကားဝှက် ပြောင်းလဲပြီးပါပြီ' : language === 'en' ? 'Password updated successfully' : 'Password berhasil diperbarui');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setActiveSubModal(null);
        setPasswordSuccess(null);
      }, 1500);
    } catch (err: any) {
      setPasswordError(err.message || (language === 'my' ? 'စကားဝှက် ပြောင်းလဲ၍ မရပါ' : language === 'en' ? 'Failed to update password' : 'Gagal mengubah password'));
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleSaveDiscord = async (e: React.FormEvent) => {
    e.preventDefault();
    setDiscordLoading(true);
    setDiscordFeedback(null);
    try {
      await updateDiscord(discordInputUser.trim(), discordInputWebhook.trim() || null, discordInputNotif);
      setDiscordFeedback({
        type: 'success',
        message: t.settings.discordSaved,
      });
      setTimeout(() => {
        setActiveSubModal(null);
        setDiscordFeedback(null);
      }, 1500);
    } catch (err: any) {
      setDiscordFeedback({
        type: 'error',
        message: err.message || t.settings.discordSaveError,
      });
    } finally {
      setDiscordLoading(false);
    }
  };

  const handleDisconnectDiscord = async () => {
    setDiscordLoading(true);
    setDiscordFeedback(null);
    try {
      await disconnectDiscord();
      setDiscordInputUser('');
      setDiscordInputWebhook('');
      setDiscordInputNotif(false);
      setDiscordFeedback({
        type: 'success',
        message: t.settings.discordDisconnected,
      });
      setTimeout(() => {
        setActiveSubModal(null);
        setDiscordFeedback(null);
      }, 1200);
    } catch (err: any) {
      setDiscordFeedback({
        type: 'error',
        message: err.message || t.settings.discordDisconnectError,
      });
    } finally {
      setDiscordLoading(false);
    }
  };

  const handleTestDiscordNotification = async () => {
    setDiscordTesting(true);
    setDiscordFeedback(null);
    try {
      const res = await authApi.testDiscord(discordInputWebhook.trim() || undefined);
      const isSent = res.data?.sent;
      const msg = language === 'my'
        ? (isSent ? 'Discord သတိပေးချက်ကို အောင်မြင်စွာ ပေးပို့ပြီးပါပြီ။' : 'Discord သတိပေးချက် ပေးပို့ရန် မအောင်မြင်ပါ။ Webhook URL ကို စစ်ဆေးပါ။')
        : language === 'en'
        ? (isSent ? 'Discord test notification sent successfully!' : 'Failed to send Discord notification. Please check your Webhook URL.')
        : (res.data?.message || 'Tes notifikasi Discord selesai diproses.');
      setDiscordFeedback({
        type: isSent ? 'success' : 'error',
        message: msg,
      });
    } catch (err: any) {
      setDiscordFeedback({
        type: 'error',
        message: err.message || t.settings.discordTestError,
      });
    } finally {
      setDiscordTesting(false);
    }
  };

  const handleSaveNotif = (e: React.FormEvent) => {
    e.preventDefault();
    triggerToast(language === 'my' ? 'နေ့စဉ် သတိပေးချက် အချိန်ဇယားကို ပြင်ဆင်ပြီးပါပြီ!' : language === 'en' ? 'Daily reminder schedule updated!' : 'Jadwal pengingat harian berhasil diperbarui!');
    setActiveSubModal(null);
  };

  const handleTestNotification = () => {
    triggerToast(language === 'my' ? `လေ့လာမှု သတိပေးချက်- JLPT ${currentLevel} ပန်းတိုင် (~၁၅ မိနစ်) စတင်လေ့လာရန် အသင့်ဖြစ်ပါပြီ!` : language === 'en' ? `Study Reminder: JLPT ${currentLevel} Target (~15 mins) is ready!` : `Pengingat Sesi: Target Sesi Belajar JLPT ${currentLevel} (~15 mnt) siap dipelajari!`);
  };

  const handleSubmitBug = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bugDesc.trim()) return;
    try {
      await feedbackApi.submit({
        category: bugCategory,
        description: bugDesc.trim(),
      });
      triggerToast(language === 'my' ? 'တုံ့ပြန်ချက် ပေးပို့ပြီးပါပြီ။ ကူညီပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်!' : language === 'en' ? 'Feedback submitted. Thank you for your support!' : 'Laporan masukan terkirim. Terima kasih atas bantuanmu!');
    } catch {
      triggerToast(language === 'my' ? 'တုံ့ပြန်ချက် ပေးပို့ပြီးပါပြီ။ ကူညီပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်!' : language === 'en' ? 'Feedback submitted. Thank you for your support!' : 'Laporan masukan terkirim. Terima kasih atas bantuanmu!');
    }
    setBugDesc('');
    setActiveSubModal(null);
  };

  const handleSaveStudySettings = (e: React.FormEvent) => {
    e.preventDefault();
    triggerToast(t.settings.studySaved);
    setActiveSubModal(null);
  };

  return (
    <>
      {/* Toast Notification Banner */}
      {toastMsg && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-70 bg-stone-900/90 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl flex items-center space-x-2 animate-slide-down">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      {/* Drawer Panel */}
      <aside className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white dark:bg-[#151D2E] shadow-2xl flex flex-col border-l border-[#EFEAE2] dark:border-[#1E293B] animate-slide-left">
        {/* Drawer Header */}
        <div className="p-4 border-b border-[#EFEAE2] dark:border-[#1E293B] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold font-mincho text-[#1E1B18] dark:text-slate-100">
              仮習う
            </span>
            <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800/60 px-2 py-0.5 rounded-full border border-indigo-100">
              JLPT {currentLevel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF8F5] dark:bg-slate-800 text-[#78716C] dark:text-slate-300 hover:text-[#1E1B18] dark:hover:text-slate-100 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 text-sm">
          {/* User Profile Card */}
          <div
            onClick={() => {
              if (user) {
                setActiveSubModal('profile');
              } else {
                onClose();
                navigate('/login');
              }
            }}
            className="card-washi rounded-2xl p-3 border border-[#EFEAE2] dark:border-[#1E293B] bg-gradient-to-br from-[#FAF8F5] via-white to-indigo-50/20 dark:from-[#0B0F19] dark:via-[#151D2E] dark:to-indigo-950/30 flex items-center justify-between cursor-pointer hover:border-indigo-200 transition-all group"
          >
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                {user?.name ? user.name.charAt(0).toUpperCase() : (user?.email ? user.email.charAt(0).toUpperCase() : 'U')}
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <p className="font-bold text-xs text-[#1E1B18] dark:text-slate-100">
                    {user?.name || (user?.email ? user.email.split('@')[0] : (language === 'my' ? 'ဧည့်သည်' : language === 'en' ? 'Guest' : 'Tamu'))}
                  </p>
                  {user?.role === 'ADMIN' && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      ADMIN
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-[#78716C] dark:text-slate-400 truncate max-w-[150px]">
                  {user?.email || (language === 'my' ? 'အကောင့်မဝင်ရသေးပါ' : language === 'en' ? 'Not logged in' : 'Belum masuk')}
                </p>
              </div>
            </div>
            {user ? (
              <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 dark:bg-indigo-950 dark:text-indigo-300 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800 group-hover:bg-indigo-100 transition-colors">
                Edit
              </span>
            ) : (
              <span className="text-[10px] font-bold text-white bg-indigo-600 px-2.5 py-1 rounded-md shadow-2xs group-hover:bg-indigo-700 transition-colors">
                {language === 'my' ? 'ဝင်ရန်' : language === 'en' ? 'Login' : 'Masuk'}
              </span>
            )}
          </div>

          {/* Quick Access Menu */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#A8A29E] dark:text-slate-500 uppercase tracking-wider block px-1">
              {t.settings.quickAccess}
            </span>

            <button
              onClick={() => {
                onClose();
                navigate('/');
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-[#FAF8F5] dark:hover:bg-[#0B0F19] transition-colors text-xs font-semibold text-[#1E1B18] dark:text-slate-200 group cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <Home className="w-4 h-4 text-stone-500 dark:text-slate-400 group-hover:text-indigo-600" />
                <span>{t.settings.homeMenu}</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            </button>

            <button
              onClick={() => {
                onClose();
                setTanyaAiOpen(true);
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 transition-colors text-xs font-semibold text-indigo-700 dark:text-indigo-300 group cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>{t.settings.tanyaAiMenu}</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />
            </button>
          </div>

          {/* Menu Navigasi Utama */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#A8A29E] dark:text-slate-500 uppercase tracking-wider block px-1">
              {t.settings.menuFeatures}
            </span>

            {/* Hubungkan Discord */}
            <button
              onClick={() => setActiveSubModal('discord')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left hover:bg-[#FAF8F5] dark:hover:bg-[#0B0F19] transition-colors text-xs font-semibold text-[#1E1B18] dark:text-slate-200 group cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-md bg-[#5865F2] flex items-center justify-center text-white">
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-semibold">{t.settings.discordIntegration}</span>
                  <span className="block text-[10px] text-stone-400 dark:text-slate-500">
                    {isDiscordLinked ? t.settings.discordLinked(user?.discord_username || '') : t.settings.discordUnlinked}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            </button>

            {/* Notifikasi Harian */}
            <button
              onClick={() => setActiveSubModal('notif')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left hover:bg-[#FAF8F5] dark:hover:bg-[#0B0F19] transition-colors text-xs font-semibold text-[#1E1B18] dark:text-slate-200 group cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <Bell className="w-4 h-4 text-stone-500 dark:text-slate-400 group-hover:text-indigo-600" />
                <div>
                  <span className="block text-xs font-semibold">{t.settings.notifications}</span>
                  <span className="block text-[10px] text-stone-400 dark:text-slate-500">{t.settings.notificationsDesc}</span>
                </div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            </button>

            {/* Pengaturan Belajar */}
            <button
              onClick={() => setActiveSubModal('study_settings')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left hover:bg-[#FAF8F5] dark:hover:bg-[#0B0F19] transition-colors text-xs font-semibold text-[#1E1B18] dark:text-slate-200 group cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <Settings className="w-4 h-4 text-stone-500 dark:text-slate-400 group-hover:text-indigo-600" />
                <div>
                  <span className="block text-xs font-semibold">{t.settings.studySettings}</span>
                  <span className="block text-[10px] text-stone-400 dark:text-slate-500">{t.settings.studySettingsDesc}</span>
                </div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            </button>

            {/* Lapor Bug / Masukan */}
            <button
              onClick={() => setActiveSubModal('bug')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left hover:bg-[#FAF8F5] dark:hover:bg-[#0B0F19] transition-colors text-xs font-semibold text-[#1E1B18] dark:text-slate-200 group cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <div>
                  <span className="block text-xs font-semibold">{t.settings.reportBug}</span>
                  <span className="block text-[10px] text-stone-400 dark:text-slate-500">{t.settings.reportBugDesc}</span>
                </div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
            {/* Dashboard Admin (Only visible if role === 'ADMIN') */}
            {user?.role === 'ADMIN' && (
              <button
                onClick={() => {
                  navigate('/admin');
                  onClose();
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left hover:bg-[#FAF8F5] dark:hover:bg-[#0B0F19] transition-colors text-xs font-semibold text-[#1E1B18] dark:text-slate-200 group cursor-pointer"
              >
                <div className="flex items-center space-x-2.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="block text-xs font-semibold">{t.settings.adminDashboard}</span>
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        Admin
                      </span>
                    </div>
                    <span className="block text-[10px] text-stone-400 dark:text-slate-500">
                      {t.settings.adminDashboardDesc}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            )}
          </div>

          {/* Language Switcher Section */}
          <div className="space-y-2 pt-2 border-t border-[#EFEAE2] dark:border-[#1E293B]">
            <span className="text-[10px] font-bold text-[#A8A29E] dark:text-slate-500 uppercase tracking-wider block px-1">
              {t.settings.languageSection}
            </span>

            <div className="grid grid-cols-3 gap-1.5 p-1 bg-stone-100 dark:bg-[#0B0F19] rounded-xl">
              {LANGUAGE_OPTIONS.map((opt) => (
                <button
                  type="button"
                  key={opt.code}
                  onClick={() => {
                    setLanguage(opt.code);
                    triggerToast(language === 'my' ? `ဘာသာစကား- ${opt.nativeName}` : language === 'en' ? `Language: ${opt.name}` : `Bahasa: ${opt.name}`);
                  }}
                  className={`py-2.5 px-2 rounded-xl font-bold text-xs transition-all flex items-center justify-center cursor-pointer text-center ${
                    language === opt.code
                      ? 'bg-white dark:bg-[#151D2E] text-indigo-700 dark:text-indigo-300 shadow-xs border border-indigo-100 dark:border-indigo-900'
                      : 'text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-slate-200 hover:bg-stone-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span className="text-xs font-bold truncate">{opt.nativeName}</span>
                </button>
              ))}
            </div>
            <p className="text-[10px] text-[#A8A29E] dark:text-slate-500 px-1">
              {t.settings.languageDesc}
            </p>
          </div>

          {/* Level Switcher Section (5-Level Grid) */}
          <div className="space-y-2.5 pt-2 border-t border-[#EFEAE2] dark:border-[#1E293B]">
            <span className="text-[10px] font-bold text-[#A8A29E] dark:text-slate-500 uppercase tracking-wider block px-1">
              {t.settings.changeLevelTitle}
            </span>

            <div className="grid grid-cols-5 gap-1.5 p-1 bg-stone-100 dark:bg-[#0B0F19] rounded-xl">
              {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map((lvl) => {
                const isActive = currentLevel === lvl;
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => handleSelectLevel(lvl)}
                    className={`py-2 px-1 rounded-lg font-bold text-xs transition-all flex flex-col items-center justify-center cursor-pointer ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-slate-200 hover:bg-stone-200/60 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span className="text-xs font-black">{lvl}</span>
                  </button>
                );
              })}
            </div>

            <div className="card-washi rounded-xl p-3 border border-indigo-100 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shadow-2xs">
                  {currentLevel}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-indigo-950 dark:text-indigo-200">
                    {t.settings.levelActiveLabel(currentLevel)}
                  </h4>
                  <p className="text-[11px] text-indigo-700 dark:text-indigo-300">
                    {currentLevel === 'N5' ? t.settings.levelDescN5 :
                     currentLevel === 'N4' ? t.settings.levelDescN4 :
                     currentLevel === 'N3' ? t.settings.levelDescN3 :
                     currentLevel === 'N2' ? t.settings.levelDescN2 :
                     t.settings.levelDescN1}
                  </p>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-[#EFEAE2] dark:border-[#1E293B] space-y-2 bg-[#FAF8F5]/60 dark:bg-[#0B0F19]/60">
          {user ? (
            <button
              onClick={handleLogout}
              className="w-full py-2.5 px-3 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/70 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 hover:bg-rose-100 text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>{t.settings.logout}</span>
            </button>
          ) : (
            <button
              onClick={() => {
                onClose();
                navigate('/login');
              }}
              className="w-full py-2.5 px-3 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>{language === 'my' ? 'အကောင့်ဝင်ရန် (Login)' : language === 'en' ? 'Log In / Register' : 'Masuk / Daftar (Login)'}</span>
            </button>
          )}

          <p className="text-[10px] text-center text-[#A8A29E] dark:text-slate-500 font-mono">
            Kanarau v1.0.0 · SRS System
          </p>
        </div>
      </aside>

      {/* 1. DISCORD MODAL */}
      {activeSubModal === 'discord' && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setActiveSubModal(null); }}
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in notranslate"
          lang={language}
          translate="no"
        >
          <div className="bg-white dark:bg-[#151D2E] rounded-2xl max-w-sm w-full p-5 space-y-4 shadow-2xl border border-[#EFEAE2] dark:border-[#1E293B] animate-slide-up max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#EFEAE2] dark:border-[#1E293B] pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[#5865F2] flex items-center justify-center text-white shadow-2xs">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1E1B18] dark:text-slate-100">{t.settings.discordIntegration}</h3>
                  <p className="text-[11px] text-[#78716C] dark:text-slate-400">{t.settings.discordSubtitle}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveSubModal(null)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Feedback Alert Banner */}
            {discordFeedback && (
              <div
                className={`p-3 rounded-xl text-xs font-medium flex items-center space-x-2 animate-fade-in ${
                  discordFeedback.type === 'success'
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 shrink-0 ${
                    discordFeedback.type === 'success' ? 'text-emerald-600' : 'text-rose-600'
                  }`}
                />
                <span className="flex-1">{discordFeedback.message}</span>
              </div>
            )}

            {/* Status Card */}
            <div className="p-3 bg-[#5865F2]/10 rounded-xl border border-[#5865F2]/20 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#5865F2] uppercase tracking-wider block">
                  {t.settings.connectionStatus}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isDiscordLinked
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                      : 'bg-stone-100 dark:bg-slate-800 text-stone-600 dark:text-slate-400'
                  }`}
                >
                  {isDiscordLinked ? t.settings.onlineLinked : t.settings.notLinked}
                </span>
              </div>

              {isDiscordLinked ? (
                <>
                  <p className="font-bold text-sm text-[#1E1B18] dark:text-slate-100">{user?.discord_username}</p>
                  <p className="text-[11px] text-[#57534E] dark:text-slate-300">
                    {t.settings.communityRoleLabel}{' '}
                    <span className="font-bold text-[#5865F2]">
                      JLPT {currentLevel} {currentLevel === 'N1' ? 'Master' : 'Challenger'}
                    </span>
                  </p>
                  <p className="text-[11px] text-[#57534E] dark:text-slate-300">
                    {t.settings.sessionNotifLabel}{' '}
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">
                      {user?.discord_notifications_enabled ? (language === 'my' ? 'ဖွင့်ထားသည် (နံနက် ၀၇:၀၀ နှင့် ည ၂၀:၀၀)' : language === 'en' ? 'Active (Morning 07:00 & Night 20:00)' : 'Aktif (Pagi 07:00 & Malam 20:00)') : (language === 'my' ? 'ပိတ်ထားသည်' : language === 'en' ? 'Disabled' : 'Nonaktif')}
                    </span>
                  </p>
                </>
              ) : (
                <p className="text-[11px] text-[#57534E] dark:text-slate-300 leading-relaxed pt-0.5">
                  {t.settings.discordModalIntro}
                </p>
              )}
            </div>

            {/* Configuration Form */}
            <form onSubmit={handleSaveDiscord} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-stone-700 dark:text-slate-300 block mb-1">
                  {t.settings.discordTagLabel} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-stone-400 font-bold text-xs">@</span>
                  <input
                    type="text"
                    required
                    value={discordInputUser}
                    onChange={(e) => setDiscordInputUser(e.target.value)}
                    placeholder={t.settings.discordTagPlaceholder}
                    className="w-full pl-7 pr-3 py-2.5 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-slate-700 rounded-xl text-xs font-semibold focus:outline-hidden focus:border-[#5865F2] text-[#1E1B18] dark:text-slate-100"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-bold text-stone-700 dark:text-slate-300">
                    {t.settings.discordWebhookLabel}
                  </label>
                  <a
                    href="https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-[#5865F2] hover:underline flex items-center space-x-0.5"
                  >
                    <span>{t.settings.discordGuide}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
                <input
                  type="url"
                  value={discordInputWebhook}
                  onChange={(e) => setDiscordInputWebhook(e.target.value)}
                  placeholder="https://discord.com/api/webhooks/..."
                  className="w-full p-2.5 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-slate-700 rounded-xl text-xs text-[#1E1B18] dark:text-slate-100 focus:outline-hidden focus:border-[#5865F2]"
                />
                <p className="text-[10px] text-stone-400 dark:text-slate-500 mt-1">
                  {t.settings.discordWebhookNote}
                </p>
              </div>

              <div className="flex items-center justify-between p-3 bg-stone-50 dark:bg-[#0B0F19] rounded-xl border border-stone-200 dark:border-slate-700">
                <div>
                  <span className="font-bold text-[#1E1B18] dark:text-slate-100 block">{t.settings.sendReminders}</span>
                  <span className="text-[10px] text-stone-500 dark:text-slate-400">{t.settings.morningNightSchedule}</span>
                </div>
                <input
                  type="checkbox"
                  checked={discordInputNotif}
                  onChange={(e) => setDiscordInputNotif(e.target.checked)}
                  className="w-4 h-4 accent-[#5865F2] cursor-pointer"
                />
              </div>

              <div className="pt-2 border-t border-[#EFEAE2] dark:border-[#1E293B] space-y-2">
                <button
                  type="submit"
                  disabled={discordLoading}
                  className="w-full py-2.5 bg-[#5865F2] hover:bg-[#4752C4] disabled:opacity-50 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer active:scale-98 shadow-sm"
                >
                  <Link2 className="w-3.5 h-3.5" />
                  <span>{discordLoading ? t.common.loading : t.settings.saveDiscord}</span>
                </button>

                {/* Test Notification Button */}
                <button
                  type="button"
                  disabled={discordTesting}
                  onClick={handleTestDiscordNotification}
                  className="w-full py-2 px-3 bg-stone-100 dark:bg-slate-800 hover:bg-stone-200 dark:hover:bg-slate-700 text-stone-700 dark:text-slate-300 font-semibold rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer text-xs active:scale-98"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${discordTesting ? 'animate-spin' : ''}`} />
                  <span>{discordTesting ? t.common.loading : t.settings.testDiscord}</span>
                </button>

                {isDiscordLinked && (
                  <button
                    type="button"
                    disabled={discordLoading}
                    onClick={handleDisconnectDiscord}
                    className="w-full py-2 px-3 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900 font-semibold rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer active:scale-98"
                  >
                    <Unlink className="w-3.5 h-3.5" />
                    <span>{t.settings.disconnectDiscord}</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. NOTIFIKASI HARIAN MODAL */}
      {activeSubModal === 'notif' && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setActiveSubModal(null); }} className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <form
            onSubmit={handleSaveNotif}
            className="bg-white dark:bg-[#151D2E] rounded-2xl max-w-sm w-full p-5 space-y-4 shadow-2xl border border-[#EFEAE2] dark:border-[#1E293B] animate-slide-up"
          >
            <div className="flex items-center justify-between border-b border-[#EFEAE2] dark:border-[#1E293B] pb-3">
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="font-bold text-sm text-[#1E1B18] dark:text-slate-100">{t.settings.reminderSchedule}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveSubModal(null)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 bg-stone-50 dark:bg-[#0B0F19] rounded-xl border border-stone-200 dark:border-slate-700">
                <span className="font-bold text-[#1E1B18] dark:text-slate-100">{t.settings.dailyReminderStatus}</span>
                <input
                  type="checkbox"
                  checked={notifActive}
                  onChange={(e) => setNotifActive(e.target.checked)}
                  className="w-4 h-4 accent-indigo-600 cursor-pointer"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 dark:text-slate-300 block mb-1">
                  {t.settings.morningTime}
                </label>
                <input
                  type="time"
                  value={notifMorning}
                  onChange={(e) => setNotifMorning(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-[#1E1B18] dark:text-slate-100"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 dark:text-slate-300 block mb-1">
                  {t.settings.eveningTime}
                </label>
                <input
                  type="time"
                  value={notifEvening}
                  onChange={(e) => setNotifEvening(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-[#1E1B18] dark:text-slate-100"
                />
              </div>

              {/* Test Button */}
              <button
                type="button"
                onClick={handleTestNotification}
                className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
              >
                <Bell className="w-3.5 h-3.5" />
                <span>{t.settings.testBanner}</span>
              </button>
            </div>

            <div className="pt-2 border-t border-[#EFEAE2] dark:border-[#1E293B] flex gap-2">
              <button
                type="button"
                onClick={() => setActiveSubModal(null)}
                className="flex-1 py-2.5 bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 font-bold rounded-xl text-xs cursor-pointer"
              >{t.common.cancel}</button>
              <button
                type="submit"
                className="flex-1 py-2.5 bg-indigo-600 text-white font-bold rounded-xl text-xs cursor-pointer active:scale-98"
              >
                {t.settings.saveSchedule}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 3. LAPOR BUG MODAL */}
      {activeSubModal === 'bug' && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setActiveSubModal(null); }} className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <form
            onSubmit={handleSubmitBug}
            className="bg-white dark:bg-[#151D2E] rounded-2xl max-w-sm w-full p-5 space-y-4 shadow-2xl border border-[#EFEAE2] dark:border-[#1E293B] animate-slide-up"
          >
            <div className="flex items-center justify-between border-b border-[#EFEAE2] dark:border-[#1E293B] pb-3">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <h3 className="font-bold text-sm text-[#1E1B18] dark:text-slate-100">{t.settings.reportBug}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveSubModal(null)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-stone-700 dark:text-slate-300 block mb-1">{t.settings.issueCategory}</label>
                <select
                  value={bugCategory}
                  onChange={(e) => setBugCategory(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-slate-700 rounded-xl text-xs font-medium cursor-pointer text-[#1E1B18] dark:text-slate-100"
                >
                  <option value="qna">{t.settings.bugCategories.qna}</option>
                  <option value="audio">{t.settings.bugCategories.audio}</option>
                  <option value="layout">{t.settings.bugCategories.layout}</option>
                  <option value="feature">{t.settings.bugCategories.feature}</option>
                  <option value="other">{t.settings.bugCategories.other}</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-stone-700 dark:text-slate-300 block mb-1">{t.settings.detailedDesc}</label>
                <textarea
                  required
                  rows={4}
                  value={bugDesc}
                  onChange={(e) => setBugDesc(e.target.value)}
                  placeholder={t.settings.bugDescPlaceholder}
                  className="w-full p-3 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-slate-700 rounded-xl text-xs leading-relaxed focus:outline-hidden focus:border-indigo-400 text-[#1E1B18] dark:text-slate-100"
                />
              </div>
            </div>

            <div className="pt-2 border-t border-[#EFEAE2] dark:border-[#1E293B] flex gap-2">
              <button
                type="button"
                onClick={() => setActiveSubModal(null)}
                className="flex-1 py-2.5 bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 font-bold rounded-xl text-xs cursor-pointer"
              >{t.common.cancel}</button>
              <button
                type="submit"
                className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1 cursor-pointer active:scale-98"
              >
                <Send className="w-3 h-3" />
                <span>{t.settings.sendReport}</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 4. PENGATURAN AKUN & GANTI PASSWORD MODAL */}
      {activeSubModal === 'profile' && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setActiveSubModal(null); }} className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-[#151D2E] rounded-2xl max-w-sm w-full p-5 space-y-4 shadow-2xl border border-[#EFEAE2] dark:border-[#1E293B] animate-slide-up max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#EFEAE2] dark:border-[#1E293B] pb-3">
              <h3 className="font-bold text-base text-[#1E1B18] dark:text-slate-100">{t.settings.drawerTitle}</h3>
              <button
                type="button"
                onClick={() => setActiveSubModal(null)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Section 1: Tampilan (Light / Dark) */}
            <div className="space-y-1.5 text-xs">
              <span className="font-bold text-stone-600 dark:text-slate-300 block">{t.settings.themeTitle}</span>
              <div className="grid grid-cols-2 p-1 bg-stone-100 dark:bg-[#0B0F19] rounded-xl gap-1">
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`py-2 px-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                    theme === 'light'
                      ? 'bg-white dark:bg-[#151D2E] text-stone-900 dark:text-slate-100 shadow-xs'
                      : 'text-stone-500 hover:text-stone-800 dark:text-slate-400'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>{t.settings.themeLight}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`py-2 px-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-stone-500 hover:text-stone-800 dark:text-slate-400'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>{t.settings.themeDark}</span>
                </button>
              </div>
              <p className="text-[11px] text-stone-400 dark:text-slate-500">
                {t.settings.themeDesc}
              </p>
            </div>

            {/* Section 2: Nama Tampilan & Email */}
            <form onSubmit={handleSaveProfile} className="space-y-3 pt-2 border-t border-[#EFEAE2] dark:border-[#1E293B] text-xs">
              <p className="text-[11px] text-stone-400 dark:text-slate-500">
                {t.settings.namePublicNote}
              </p>

              <div>
                <label className="font-bold text-stone-600 dark:text-slate-300 block mb-1">{t.settings.displayName}</label>
                <input
                  type="text"
                  required
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-slate-700 rounded-xl text-xs font-semibold focus:outline-hidden focus:border-indigo-500 text-[#1E1B18] dark:text-slate-100"
                />
              </div>

              <div>
                <label className="font-bold text-stone-600 dark:text-slate-300 block mb-1">{t.settings.email}</label>
                <input
                  type="email"
                  disabled
                  value={user?.email || ''}
                  className="w-full p-2.5 bg-stone-100 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 rounded-xl text-xs text-stone-500 dark:text-slate-400 cursor-not-allowed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition-all cursor-pointer active:scale-98 shadow-sm"
              >
                {(t.settings as any).saveName || "Simpan nama"}
              </button>
            </form>

            {/* Section 3: Ganti Password */}
            <form onSubmit={handleChangePassword} className="space-y-3 pt-3 border-t border-[#EFEAE2] dark:border-[#1E293B] text-xs">
              <div className="flex items-center space-x-1.5 font-bold text-sm text-[#1E1B18] dark:text-slate-100">
                <Lock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>{t.settings.changePassword}</span>
              </div>

              {passwordError && (
                <div className="p-2.5 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs rounded-xl">
                  {passwordError}
                </div>
              )}

              {passwordSuccess && (
                <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs rounded-xl flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{passwordSuccess}</span>
                </div>
              )}

              <div>
                <label className="font-bold text-stone-600 dark:text-slate-300 block mb-1">{t.settings.newPassword}</label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder={t.settings.passwordMinPlaceholder}
                  className="w-full p-2.5 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-slate-700 rounded-xl text-xs focus:outline-hidden focus:border-indigo-500 text-[#1E1B18] dark:text-slate-100"
                />
              </div>

              <div>
                <label className="font-bold text-stone-600 dark:text-slate-300 block mb-1">{t.settings.confirmPassword}</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={t.settings.passwordConfirmPlaceholder}
                  className="w-full p-2.5 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-slate-700 rounded-xl text-xs focus:outline-hidden focus:border-indigo-500 text-[#1E1B18] dark:text-slate-100"
                />
              </div>

              <button
                type="submit"
                disabled={passwordLoading}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs transition-all cursor-pointer active:scale-98 shadow-sm"
              >
                {passwordLoading ? t.settings.savingPassword : t.settings.changePasswordBtn}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 5. PENGATURAN BELAJAR MODAL */}
      {activeSubModal === 'study_settings' && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setActiveSubModal(null); }} className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <form
            onSubmit={handleSaveStudySettings}
            className="bg-white dark:bg-[#151D2E] rounded-2xl max-w-sm w-full p-5 space-y-4 shadow-2xl border border-[#EFEAE2] dark:border-[#1E293B] animate-slide-up"
          >
            <div className="flex items-center justify-between border-b border-[#EFEAE2] dark:border-[#1E293B] pb-3">
              <div className="flex items-center space-x-2">
                <Settings className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="font-bold text-sm text-[#1E1B18] dark:text-slate-100">{(t.settings as any).studySettingsModalTitle || t.settings.studySettings || "Pengaturan Belajar"}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveSubModal(null)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-stone-700 dark:text-slate-300 block mb-1">{t.settings.audioSpeed}</label>
                <div className="grid grid-cols-3 gap-2">
                  {['1.0x', '1.15x', '1.25x'].map((spd) => (
                    <button
                      type="button"
                      key={spd}
                      onClick={() => setDefaultSpeed(spd)}
                      className={`py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        defaultSpeed === spd
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'bg-stone-50 dark:bg-[#0B0F19] border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-300'
                      }`}
                    >
                      {spd}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-stone-50 dark:bg-[#0B0F19] rounded-xl border border-stone-200 dark:border-slate-700">
                <div>
                  <span className="font-bold text-[#1E1B18] dark:text-slate-100 block">{t.settings.furiganaTitle}</span>
                  <span className="text-[10px] text-stone-500 dark:text-slate-400">{t.settings.furiganaDesc}</span>
                </div>
                <input
                  type="checkbox"
                  checked={autoRuby}
                  onChange={(e) => setAutoRuby(e.target.checked)}
                  className="w-4 h-4 accent-indigo-600 cursor-pointer"
                />
              </div>

              <div className="p-3 bg-amber-50/70 dark:bg-amber-950/40 rounded-xl border border-amber-200/80 dark:border-amber-800/60">
                <span className="font-bold text-amber-950 dark:text-amber-200 block text-[11px]">{t.settings.curriculumFormat}</span>
                <p className="text-[11px] text-amber-900 dark:text-amber-300 mt-0.5">
                  {t.settings.curriculumDesc}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#EFEAE2] dark:border-[#1E293B] flex gap-2">
              <button
                type="button"
                onClick={() => setActiveSubModal(null)}
                className="flex-1 py-2.5 bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 font-bold rounded-xl text-xs cursor-pointer"
              >{t.common.cancel}</button>
              <button
                type="submit"
                className="flex-1 py-2.5 bg-indigo-600 text-white font-bold rounded-xl text-xs cursor-pointer active:scale-98"
              >
                {t.settings.saveSettings}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tanya AI Sensei Modal */}
      <TanyaAiModal isOpen={tanyaAiOpen} onClose={() => setTanyaAiOpen(false)} />
    </>
  );
};
