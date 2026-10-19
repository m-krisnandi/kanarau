import React from 'react';
import type { MonthlyCalendar } from '@/types';
import { ChevronLeft, ChevronRight, Flame, Calendar as CalendarIcon, Clock, Award } from 'lucide-react';
import { useTranslation } from '@/stores/languageStore';

interface Props {
  calendar: MonthlyCalendar | null;
  currentYear: number;
  currentMonth: number;
  streak?: number;
  countdownDays?: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export const StudyCalendar: React.FC<Props> = ({
  calendar,
  currentYear,
  currentMonth,
  streak,
  countdownDays,
  onPrevMonth,
  onNextMonth,
}) => {
  const { t, language } = useTranslation();
  const monthNames = t.calendar.monthNames;

  const studiedDays = calendar?.days.filter((d) => d.studied).length || 0;
  const totalMinutes = calendar?.days.reduce((sum, d) => sum + (d.study_time_minutes || 0), 0) || 0;
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;

  // Day of week alignment for 1st of the month
  const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay(); // 0 = Sun
  const emptyDays = Array.from({ length: firstDay });

  return (
    <div className="card-washi rounded-2xl overflow-hidden border border-[#EFEAE2] dark:border-[#232F46] dark:bg-[#151D2E]">
      {/* Calendar Header */}
      <div className="px-4 sm:px-5 py-4 border-b border-[#EFEAE2] dark:border-[#232F46] bg-[#FAF8F5]/60 dark:bg-[#0B0F19]/60">
        <div className="flex items-center justify-between">
          <button
            onClick={onPrevMonth}
            className="w-8 h-8 rounded-full hover:bg-white dark:hover:bg-slate-800 text-[#78716C] dark:text-slate-400 hover:text-[#1E1B18] dark:hover:text-slate-100 flex items-center justify-center transition-colors border border-transparent hover:border-[#EFEAE2] dark:hover:border-slate-700 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="text-center">
            <h3 className="font-bold text-sm text-[#1E1B18] dark:text-slate-100 tracking-tight">
              {monthNames[currentMonth - 1]} {currentYear}
            </h3>
            <p className="text-[11px] text-[#A8A29E] dark:text-slate-400">{t.calendar.dailySchedule}</p>
          </div>
          <button
            onClick={onNextMonth}
            className="w-8 h-8 rounded-full hover:bg-white dark:hover:bg-slate-800 text-[#78716C] dark:text-slate-400 hover:text-[#1E1B18] dark:hover:text-slate-100 flex items-center justify-center transition-colors border border-transparent hover:border-[#EFEAE2] dark:hover:border-slate-700 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Summary Chips (2x2 on Mobile/Tablet to Prevent Overlap) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 mt-3 pt-3 border-t border-[#EFEAE2]/60 dark:border-[#232F46] text-[11px]">
          <div className="flex items-center space-x-1.5 px-2 py-1.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/50 dark:border-amber-800/40 text-amber-900 dark:text-amber-300 min-w-0">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
            <span className="font-semibold truncate">{t.calendar.streakChip(streak ?? 0)}</span>
          </div>

          <div className="flex items-center space-x-1.5 px-2 py-1.5 rounded-lg bg-[#FAF8F5] dark:bg-slate-800/50 border border-[#EFEAE2] dark:border-slate-700/50 text-[#57534E] dark:text-slate-300 min-w-0">
            <CalendarIcon className="w-3.5 h-3.5 text-[#78716C] dark:text-slate-400 shrink-0" />
            <span className="font-semibold truncate">{t.calendar.activeDaysChip(studiedDays)}</span>
          </div>

          <div className="flex items-center space-x-1.5 px-2 py-1.5 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/40 text-indigo-900 dark:text-indigo-300 min-w-0">
            <Clock className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
            <span className="font-semibold truncate">{t.calendar.totalTimeChip(hours, mins)}</span>
          </div>

          <div className="flex items-center space-x-1.5 px-2 py-1.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-300 min-w-0">
            <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-semibold truncate">{t.calendar.jlptCountdownChip(countdownDays ?? 49)}</span>
          </div>
        </div>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 border-b border-[#EFEAE2] dark:border-[#232F46] bg-[#FAF8F5]/30 dark:bg-[#0B0F19]/40 text-center py-2 text-[11px] font-bold text-[#A8A29E] dark:text-slate-400 uppercase tracking-wider">
        {t.calendar.daysShort.map((dayName, idx) => (
          <div key={idx}>{dayName}</div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 p-2 bg-[#FAF8F5]/20 dark:bg-[#0B0F19]/20">
        {emptyDays.map((_, i) => (
          <div key={`empty-${i}`} className="min-h-[52px] rounded-xl bg-transparent" />
        ))}

        {calendar?.days.map((day) => {
          const parts = day.date.split('-');
          const dayYear = parseInt(parts[0] || '0', 10);
          const dayMonth = parseInt(parts[1] || '0', 10);
          const dayNum = parseInt(parts[2] || '0', 10);

          const now = new Date();
          const todayYear = now.getFullYear();
          const todayMonth = now.getMonth() + 1;
          const todayDate = now.getDate();

          const isToday =
            dayNum === todayDate &&
            dayMonth === todayMonth &&
            dayYear === todayYear;

          const isPast =
            dayYear < todayYear ||
            (dayYear === todayYear && dayMonth < todayMonth) ||
            (dayYear === todayYear && dayMonth === todayMonth && dayNum < todayDate);

          const isMissed = !day.studied && isPast;

          return (
            <div
              key={day.date}
              className={`min-h-[52px] rounded-xl p-1 flex flex-col justify-between transition-all border ${
                isToday
                  ? 'border-indigo-600 dark:border-indigo-500 border-2 bg-indigo-50/60 dark:bg-indigo-950/60 shadow-xs ring-2 ring-indigo-100 dark:ring-indigo-900/40'
                  : day.studied
                  ? day.study_time_minutes >= 30
                    ? 'bg-indigo-100/80 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/60 text-indigo-950 dark:text-indigo-200 font-semibold'
                    : 'bg-indigo-50/60 dark:bg-indigo-950/25 border-indigo-100/80 dark:border-indigo-900/40 text-indigo-900 dark:text-indigo-300'
                  : isMissed
                  ? 'bg-rose-50/40 dark:bg-rose-950/25 border-rose-100 dark:border-rose-900/30 text-rose-700 dark:text-rose-400'
                  : 'bg-white dark:bg-[#0B0F19]/70 border-[#EFEAE2]/60 dark:border-slate-800 text-[#78716C] dark:text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between px-0.5">
                <span
                  className={`text-[11px] font-bold ${
                    isToday
                      ? 'text-indigo-800 dark:text-indigo-300 font-extrabold'
                      : day.studied
                      ? 'text-indigo-950 dark:text-indigo-200'
                      : isMissed
                      ? 'text-rose-700 dark:text-rose-400'
                      : 'text-stone-700 dark:text-slate-300'
                  }`}
                >
                  {dayNum}
                </span>
                {day.studied && (
                  <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold leading-none">✓</span>
                )}
                {isMissed && (
                  <span className="text-[9px] text-rose-400 dark:text-rose-500 font-bold leading-none">✕</span>
                )}
              </div>

              {day.studied && day.study_time_minutes > 0 ? (
                <span className="text-[9px] font-bold text-indigo-700 dark:text-indigo-400 text-center pb-0.5">
                  {t.calendar.minuteBadge(day.study_time_minutes)}
                </span>
              ) : (
                <div />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
