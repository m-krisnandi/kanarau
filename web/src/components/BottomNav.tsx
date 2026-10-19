import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BookOpen, RotateCcw, Search, BarChart3 } from 'lucide-react';
import { useReviewStore } from '@/stores/reviewStore';
import { useTranslation } from '@/stores/languageStore';

export const BottomNav: React.FC = () => {
  const location = useLocation();
  const pendingCount = useReviewStore((state) => state.pendingCount);
  const { t } = useTranslation();

  const isBelajarActive =
    location.pathname === '/' ||
    location.pathname.startsWith('/belajar') ||
    location.pathname.startsWith('/study-session');

  const navItems = [
    {
      to: '/',
      label: t.nav.belajar,
      icon: BookOpen,
      isActive: isBelajarActive,
    },
    {
      to: '/review',
      label: t.nav.review,
      icon: RotateCcw,
      badge: pendingCount > 0 ? pendingCount : null,
      isActive: location.pathname.startsWith('/review'),
    },
    {
      to: '/jisho',
      label: t.nav.jisho,
      icon: Search,
      isActive: location.pathname.startsWith('/jisho'),
    },
    {
      to: '/progress',
      label: t.nav.statistik,
      icon: BarChart3,
      isActive: location.pathname.startsWith('/progress'),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 glass-nav border-t border-[#EFEAE2] dark:border-[#1E293B] pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-md mx-auto grid grid-cols-4 px-2 py-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all relative ${
                active
                  ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                  : 'text-[#78716C] dark:text-slate-400 hover:text-[#292524] dark:hover:text-slate-200 font-medium'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <Icon className={`w-5 h-5 transition-transform ${active ? 'scale-110' : ''}`} />
                {typeof item.badge === 'number' && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full min-w-[15px] h-[15px] flex items-center justify-center shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] mt-1 tracking-tight ${active ? 'font-bold' : ''}`}>
                {item.label}
              </span>
              {active && (
                <span className="w-1 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-0.5" />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
