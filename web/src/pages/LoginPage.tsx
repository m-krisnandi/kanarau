import React, { useState } from 'react';
import { useAuthStore } from '@/stores/authStore';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import {
  LogIn,
  UserPlus,
  KeyRound,
  CheckCircle2,
  AlertCircle,
  X,
  ArrowLeft,
  Sun,
  Moon,
} from 'lucide-react';
import { useTranslation } from '@/stores/languageStore';
import { useThemeStore } from '@/stores/themeStore';
import { LANGUAGE_OPTIONS } from '@/locales/translations';
import { authApi } from '@/services/api';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, language, setLanguage } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";
  const { login, register, isLoading, error, clearError, token } = useAuthStore();

  React.useEffect(() => {
    if (token) {
      navigate('/', { replace: true });
    }
  }, [token, navigate]);

  const searchParams = new URLSearchParams(location.search);
  const initialRegister = searchParams.get('tab') === 'register';
  const [isRegister, setIsRegister] = useState(initialRegister);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Forgot password modal state
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotNewPassword, setForgotNewPassword] = useState('');
  const [forgotConfirmPassword, setForgotConfirmPassword] = useState('');
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotError, setForgotError] = useState<string | null>(null);
  const [forgotSuccess, setForgotSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    try {
      if (isRegister) {
        await register(name.trim(), email.trim(), password);
      } else {
        await login(email.trim(), password);
      }
      navigate('/', { replace: true });
    } catch {
      // Handled in store
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError(null);
    setForgotSuccess(null);

    if (forgotNewPassword.trim().length < 6) {
      setForgotError(t.settings.passwordMinPlaceholder);
      return;
    }

    if (forgotNewPassword !== forgotConfirmPassword) {
      setForgotError(t.login.passwordMismatch);
      return;
    }

    setForgotLoading(true);
    try {
      await authApi.forgotPassword(forgotEmail.trim(), forgotNewPassword.trim());
      setForgotSuccess(t.login.resetSuccess);
      setEmail(forgotEmail.trim());
      setPassword(forgotNewPassword.trim());
      setTimeout(() => {
        setShowForgotModal(false);
        setForgotSuccess(null);
      }, 1800);
    } catch (err: any) {
      setForgotError(err?.message || (language === 'my' ? 'စကားဝှက် ပြန်လည်သတ်မှတ်၍ မရပါ' : language === 'en' ? 'Failed to reset password.' : 'Gagal mereset password.'));
    } finally {
      setForgotLoading(false);
    }
  };

  if (token) {
    return null;
  }

  return (
    <div className="min-h-[88vh] flex flex-col justify-between py-2 px-4 max-w-md mx-auto w-full">
      {/* Top Utility Bar (Language Selector & Theme Toggle) */}
      <div className="flex items-center justify-between py-2 mb-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'my' ? 'ပင်မစာမျက်နှာ' : language === 'en' ? 'Home' : 'Beranda'}</span>
        </button>

        <div className="flex items-center space-x-2">
          {/* Language Switcher Pills */}
          <div className="flex items-center bg-stone-100 dark:bg-[#1E293B] p-0.5 rounded-xl border border-stone-200/80 dark:border-[#232F46]">
            {LANGUAGE_OPTIONS.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLanguage(opt.code)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  language === opt.code
                    ? 'bg-white dark:bg-[#0B0F19] text-indigo-700 dark:text-indigo-400 shadow-2xs'
                    : 'text-stone-500 dark:text-zinc-400 hover:text-stone-800 dark:hover:text-zinc-200'
                }`}
                title={opt.name}
              >
                {opt.flagCode === 'MM' ? 'MM' : opt.flagCode}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-[#1E293B] dark:hover:bg-[#28354D] text-stone-600 dark:text-zinc-300 transition-colors cursor-pointer"
            title="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-600" />}
          </button>
        </div>
      </div>

      {/* Auth Card */}
      <div className="w-full max-w-sm mx-auto space-y-6 my-auto">
        {/* Brand */}
        <div className="text-center space-y-1.5">
          <span className="text-4xl font-extrabold font-jp tracking-tight text-indigo-700 dark:text-indigo-400">
            仮習う
          </span>
          <h2 className="text-lg font-bold text-stone-900 dark:text-white">
            Kanarau
          </h2>
          <p className="text-xs text-stone-500 dark:text-zinc-400">
            {t.login.tagline}
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white dark:bg-[#151D2E] p-6 rounded-2xl border border-stone-200 dark:border-[#232F46] shadow-sm space-y-5">
          {/* Tabs */}
          <div className="flex border-b border-stone-100 dark:border-[#232F46]">
            <button
              type="button"
              onClick={() => {
                setIsRegister(false);
                clearError();
              }}
              className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-all cursor-pointer ${
                !isRegister
                  ? 'border-indigo-600 text-indigo-700 dark:text-indigo-400'
                  : 'border-transparent text-stone-400 dark:text-zinc-500 hover:text-stone-700 dark:hover:text-zinc-300'
              }`}
            >
              {t.login.tabLogin}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsRegister(true);
                clearError();
              }}
              className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-all cursor-pointer ${
                isRegister
                  ? 'border-indigo-600 text-indigo-700 dark:text-indigo-400'
                  : 'border-transparent text-stone-400 dark:text-zinc-500 hover:text-stone-700 dark:hover:text-zinc-300'
              }`}
            >
              {t.login.tabRegister}
            </button>
          </div>

          {error && (
            <div className="p-3 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-rose-700 dark:text-rose-400 text-xs rounded-xl flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-zinc-300 mb-1">
                  {t.login.fullName}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 dark:border-[#232F46] bg-white dark:bg-[#0B0F19] text-stone-900 dark:text-white text-sm focus:outline-hidden focus:border-indigo-500 transition-colors"
                  placeholder="Nama Lengkap"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-zinc-300 mb-1">
                {isRegister ? t.login.email : (t.login as any).emailOrUsername || 'Email atau Username'}
              </label>
              <input
                type={isRegister ? "email" : "text"}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 dark:border-[#232F46] bg-white dark:bg-[#0B0F19] text-stone-900 dark:text-white text-sm focus:outline-hidden focus:border-indigo-500 transition-colors"
                placeholder={isRegister ? "nama@email.com" : (language === 'my' ? 'အီးမေးလ် သို့မဟုတ် admin' : language === 'en' ? 'Email or username (e.g. admin)' : 'Email atau username (misal: admin)')}
                autoCapitalize="none"
                autoCorrect="off"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-stone-700 dark:text-zinc-300">
                  {t.login.password}
                </label>
                {!isRegister && (
                  <button
                    type="button"
                    onClick={() => {
                      setForgotEmail(email);
                      setForgotNewPassword('');
                      setForgotConfirmPassword('');
                      setForgotError(null);
                      setForgotSuccess(null);
                      setShowForgotModal(true);
                      clearError();
                    }}
                    className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition-colors cursor-pointer"
                  >
                    {t.login.forgotPasswordLink}
                  </button>
                )}
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 dark:border-[#232F46] bg-white dark:bg-[#0B0F19] text-stone-900 dark:text-white text-sm focus:outline-hidden focus:border-indigo-500 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-md transition-all active:scale-[0.99] flex items-center justify-center space-x-2 text-sm cursor-pointer"
            >
              {isRegister ? <UserPlus className="w-4 h-4" /> : <LogIn className="w-4 h-4" />}
              <span>{isLoading ? t.login.processing : isRegister ? t.login.registerBtn : t.login.loginBtn}</span>
            </button>
          </form>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-[#151D2E] rounded-2xl border border-stone-200 dark:border-[#232F46] max-w-sm w-full p-6 shadow-2xl space-y-4 animate-slide-up">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-[#232F46]">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <KeyRound className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-stone-900 dark:text-white font-mincho">
                  {t.login.forgotModalTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowForgotModal(false)}
                className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-[#1E293B] text-stone-500 dark:text-zinc-400 flex items-center justify-center text-xs cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-600 dark:text-zinc-400 leading-relaxed">
              {t.login.forgotModalDesc}
            </p>

            {forgotError && (
              <div className="p-3 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-rose-700 dark:text-rose-400 text-xs rounded-xl flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{forgotError}</span>
              </div>
            )}

            {forgotSuccess && (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-xs rounded-xl flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{forgotSuccess}</span>
              </div>
            )}

            <form onSubmit={handleResetPassword} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-stone-700 dark:text-zinc-300 block mb-1">
                  {t.login.email}
                </label>
                <input
                  type="email"
                  required
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-[#232F46] rounded-xl focus:outline-hidden focus:border-indigo-500 text-stone-900 dark:text-white"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 dark:text-zinc-300 block mb-1">
                  {t.login.newPasswordLabel}
                </label>
                <input
                  type="password"
                  required
                  value={forgotNewPassword}
                  onChange={(e) => setForgotNewPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-[#232F46] rounded-xl focus:outline-hidden focus:border-indigo-500 text-stone-900 dark:text-white"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 dark:text-zinc-300 block mb-1">
                  {t.login.confirmPasswordLabel}
                </label>
                <input
                  type="password"
                  required
                  value={forgotConfirmPassword}
                  onChange={(e) => setForgotConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-[#232F46] rounded-xl focus:outline-hidden focus:border-indigo-500 text-stone-900 dark:text-white"
                  placeholder="••••••••"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowForgotModal(false)}
                  className="flex-1 py-2.5 bg-stone-100 hover:bg-stone-200 dark:bg-[#1E293B] text-stone-700 dark:text-zinc-300 font-bold rounded-xl text-xs cursor-pointer transition-colors"
                >
                  {t.login.backToLogin}
                </button>
                <button
                  type="submit"
                  disabled={forgotLoading}
                  className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs shadow-md cursor-pointer transition-all active:scale-98"
                >
                  {forgotLoading ? t.login.processing : t.login.resetBtn}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer copyright note */}
      <div className="text-center py-2 text-[11px] text-stone-400 dark:text-zinc-500 font-mono">
        Kanarau v1.0.0 · SRS System
      </div>
    </div>
  );
};
