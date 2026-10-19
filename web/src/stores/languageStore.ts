import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations, type Language } from '@/locales/translations';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'id',
      setLanguage: (language: Language) => set({ language }),
    }),
    {
      name: 'kanarau-language',
    }
  )
);

export const useTranslation = () => {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const t = translations[language] || translations.id;

  return { language, setLanguage, t };
};
