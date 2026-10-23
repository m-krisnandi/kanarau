import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Flame, ChevronDown, CheckCircle2, Sun, Moon, Globe, Check } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { useThemeStore } from '@/stores/themeStore';
import { useTranslation } from '@/stores/languageStore';
import { LANGUAGE_OPTIONS } from '@/locales/translations';
import type { Language } from '@/locales/translations';
import type { JLPTLevel } from '@/types';
import { SettingsDrawer } from './SettingsDrawer';
import { progressApi } from '@/services/api';

const JLPT_LEVEL_OPTIONS: { level: JLPTLevel; label: Record<Language, string> }[] = [
  { level: 'N5', label: { id: 'N5 - Pemula (Beginner)', en: 'N5 - Beginner', my: 'N5 - အခြေခံအဆင့်' } },
  { level: 'N4', label: { id: 'N4 - Dasar (Elementary)', en: 'N4 - Elementary', my: 'N4 - အလယ်အလတ်အကြို' } },
  { level: 'N3', label: { id: 'N3 - Menengah (Intermediate)', en: 'N3 - Intermediate', my: 'N3 - အလယ်အလတ်အဆင့်' } },
  { level: 'N2', label: { id: 'N2 - Menengah Atas (Upper-Inter)', en: 'N2 - Upper-Intermediate', my: 'N2 - အလယ်အလတ်အဆင့်မြင့်' } },
  { level: 'N1', label: { id: 'N1 - Mahir (Advanced)', en: 'N1 - Advanced', my: 'N1 - အဆင့်မြင့်ဆုံး' } },
];

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const currentLevel = (useAuthStore((state) => state.currentLevel) || user?.current_level || 'N2') as JLPTLevel;
  const setLevel = useAuthStore((state) => state.setLevel);
  const { theme, toggleTheme } = useThemeStore();
  const { language, setLanguage, t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [levelMenuOpen, setLevelMenuOpen] = useState(false);
  const [levelToast, setLevelToast] = useState<string | null>(null);
  const [streak, setStreak] = useState<number>(user?.streak ?? 0);

  useEffect(() => {
    async function loadRealStreak() {
      try {
        const res = await progressApi.getOverallStats();
        if (res?.data?.current_streak !== undefined) {
          setStreak(res.data.current_streak);
        } else {
          setStreak(user?.streak ?? 0);
        }
      } catch {
        setStreak(user?.streak ?? 0);
      }
    }
    loadRealStreak();
  }, [user]);

  const handleSelectLevel = (lvl: JLPTLevel) => {
    setLevel(lvl);
    setLevelToast(t.common.levelToast(lvl));
    setLevelMenuOpen(false);
    setTimeout(() => setLevelToast(null), 2500);
  };

  return (
    <>
      <header className="sticky top-0 z-30 glass-nav border-b border-[#EFEAE2] dark:border-[#1E293B] pt-[env(safe-area-inset-top,0px)]">
        <div className="max-w-md mx-auto px-3 sm:px-4 h-13 sm:h-14 flex items-center justify-between">
          {/* Brand (Clickable to Home) & Level Switcher Dropdown */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => navigate('/')}
              title={t.common.homeTooltip}
              className="text-xl font-bold font-mincho text-[#1E1B18] dark:text-slate-100 tracking-tight cursor-pointer hover:opacity-80 transition-opacity active:scale-95 text-left"
            >
              {t.common.appName}
            </button>

            {/* 1-Click Level Popover */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLevelMenuOpen(!levelMenuOpen)}
                title={t.settings.levelActiveLabel(currentLevel)}
                className={`group flex items-center space-x-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-2xs transition-all active:scale-95 cursor-pointer select-none ${
                  levelMenuOpen
                    ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700'
                    : 'text-indigo-700 dark:text-indigo-300 bg-indigo-50/90 dark:bg-indigo-950/70 hover:bg-indigo-100/90 dark:hover:bg-indigo-900/80 border-indigo-200/80 dark:border-indigo-800/80'
                }`}
              >
                <span>{currentLevel}</span>
                <ChevronDown className={`w-3 h-3 text-indigo-500 transition-transform duration-200 ${levelMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {levelMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLevelMenuOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-56 py-1.5 bg-white dark:bg-[#151D2E] rounded-xl shadow-xl border border-[#EFEAE2] dark:border-[#232F46] z-50 animate-fade-in divide-y divide-[#EFEAE2]/60 dark:divide-[#232F46]/60">
                    <div className="px-3 py-1.5 text-[10px] font-bold text-stone-400 dark:text-slate-500 uppercase tracking-wider">
                      {t.settings.selectLevelPrompt || 'Pilih Level JLPT'}
                    </div>
                    {JLPT_LEVEL_OPTIONS.map((item) => {
                      const isSelected = currentLevel === item.level;
                      return (
                        <button
                          key={item.level}
                          type="button"
                          onClick={() => handleSelectLevel(item.level)}
                          className={`w-full px-3 py-2 flex items-center justify-between text-left text-xs transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-indigo-50/80 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 font-bold'
                              : 'text-[#1E1B18] dark:text-slate-200 hover:bg-stone-50 dark:hover:bg-slate-800/60 font-medium'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <span className={`w-6 h-6 rounded-md font-extrabold text-[11px] flex items-center justify-center border ${
                              isSelected
                                ? 'bg-indigo-600 text-white border-indigo-600'
                                : 'bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-200 border-stone-200 dark:border-slate-700'
                            }`}>
                              {item.level}
                            </span>
                            <span className="text-xs">{item.label[language] || item.label.id}</span>
                          </div>
                          {isSelected && <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Stats & Actions */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {/* Streak */}
            <div className="flex items-center space-x-1 text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-50/90 dark:bg-amber-950/70 px-2.5 py-1 rounded-full border border-amber-200/60 dark:border-amber-800/70 shadow-2xs">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{streak}d</span>
            </div>

            {/* Language Switcher Dropdown (1-Click Direct Selection) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                title={`Pilih Bahasa (Sekarang: ${language.toUpperCase()})`}
                className={`h-8 px-2 rounded-full flex items-center space-x-1 transition-colors text-[10px] font-extrabold cursor-pointer active:scale-95 border ${
                  langMenuOpen
                    ? 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
                    : 'bg-[#EFEAE2]/60 hover:bg-[#E2DDD5] dark:bg-slate-800/80 dark:hover:bg-slate-700 text-[#57534E] dark:text-slate-300 border-transparent dark:border-slate-700/60'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>{LANGUAGE_OPTIONS.find((o) => o.code === language)?.nativeName || 'Bahasa'}</span>
              </button>

              {langMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-44 py-1.5 bg-white dark:bg-[#151D2E] rounded-xl shadow-xl border border-[#EFEAE2] dark:border-[#232F46] z-50 animate-fade-in divide-y divide-[#EFEAE2]/60 dark:divide-[#232F46]/60">
                    {LANGUAGE_OPTIONS.map((opt) => {
                      const isSelected = language === opt.code;
                      return (
                        <button
                          key={opt.code}
                          type="button"
                          onClick={() => {
                            setLanguage(opt.code);
                            setLangMenuOpen(false);
                          }}
                          className={`w-full px-3 py-2 flex items-center justify-between text-left text-xs transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-indigo-50/80 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 font-bold'
                              : 'text-[#1E1B18] dark:text-slate-200 hover:bg-stone-50 dark:hover:bg-slate-800/60 font-medium'
                          }`}
                        >
                          <div className="flex items-center space-x-2 py-0.5">
                            <span className="font-semibold text-xs">{opt.nativeName}</span>
                            <span className="text-[10px] text-stone-400 dark:text-slate-500">({opt.name})</span>
                          </div>
                          {isSelected && <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Theme Toggle Button (Light / Dark) */}
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? t.common.lightMode : t.common.darkMode}
              className="w-8 h-8 rounded-full bg-[#EFEAE2]/60 hover:bg-[#E2DDD5] dark:bg-slate-800/80 dark:hover:bg-slate-700 text-[#57534E] dark:text-amber-400 flex items-center justify-center transition-colors text-xs font-bold cursor-pointer active:scale-95 border border-transparent dark:border-slate-700/60"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-stone-600" />
              )}
            </button>

            {/* Settings Drawer Button */}
            <button
              onClick={() => setDrawerOpen(true)}
              title={t.common.menuSettings}
              className="w-8 h-8 rounded-full bg-[#EFEAE2]/60 hover:bg-[#E2DDD5] dark:bg-slate-800/80 dark:hover:bg-slate-700 text-[#57534E] dark:text-slate-300 flex items-center justify-center transition-colors text-xs font-bold cursor-pointer active:scale-95 border border-transparent dark:border-slate-700/60"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Global Level Switch Toast Banner */}
        {levelToast && (
          <div className="bg-indigo-600 text-white text-xs font-bold py-1 px-4 text-center flex items-center justify-center space-x-1.5 animate-slide-down">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{levelToast}</span>
          </div>
        )}
      </header>

      <SettingsDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};
