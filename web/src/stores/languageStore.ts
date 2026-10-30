import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations, type Language } from '@/locales/translations';
import { authApi } from '@/services/api';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language, syncBackend?: boolean) => void;
}

const syncDocumentLang = (lang: Language) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang === 'my' ? 'my' : (lang === 'id' ? 'id' : 'en');
  }
};

const getSavedLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  try {
    const rawDirect = localStorage.getItem('kanarau_lang');
    if (rawDirect === 'en' || rawDirect === 'my' || rawDirect === 'id') {
      return rawDirect as Language;
    }
    const raw = localStorage.getItem('kanarau-language');
    if (raw) {
      const parsed = JSON.parse(raw);
      const l = parsed?.state?.language;
      if (l === 'en' || l === 'my' || l === 'id') return l as Language;
    }
  } catch {}
  return 'en';
};

const initialLang = getSavedLanguage();
syncDocumentLang(initialLang);

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: initialLang,
      setLanguage: (language: Language, syncBackend: boolean = true) => {
        try {
          localStorage.setItem('kanarau_lang', language);
        } catch {}
        syncDocumentLang(language);
        set({ language });

        if (syncBackend) {
          try {
            const token = localStorage.getItem('kanarau-auth');
            if (token && token.includes('"token"')) {
              authApi.updateLanguage(language).catch(() => {});
            }
          } catch {}
        }
      },
    }),
    {
      name: 'kanarau-language',
      onRehydrateStorage: () => (state) => {
        if (state?.language) {
          syncDocumentLang(state.language);
          try {
            localStorage.setItem('kanarau_lang', state.language);
          } catch {}
        }
      },
    }
  )
);

export const useTranslation = () => {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const t = translations[language] || translations.en;

  return { language, setLanguage, t };
};
