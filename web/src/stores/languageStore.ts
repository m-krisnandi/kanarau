import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations, type Language } from '@/locales/translations';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

const syncDocumentLang = (lang: Language) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang === 'my' ? 'my' : (lang === 'en' ? 'en' : 'id');
  }
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'id',
      setLanguage: (language: Language) => {
        syncDocumentLang(language);
        set({ language });
      },
    }),
    {
      name: 'kanarau-language',
      onRehydrateStorage: () => (state) => {
        if (state) {
          syncDocumentLang(state.language);
        }
      },
    }
  )
);

export const useTranslation = () => {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const t = translations[language] || translations.id;

  return { language, setLanguage, t };
};
