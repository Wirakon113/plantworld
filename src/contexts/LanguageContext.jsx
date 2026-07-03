import { createContext, useState, useEffect, useCallback } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('expo-language');
      if (saved && ['th', 'en', 'zh'].includes(saved)) return saved;
    } catch {}
    return 'th';
  });

  const setLanguage = useCallback((lang) => {
    if (['th', 'en', 'zh'].includes(lang)) {
      setLanguageState(lang);
      try {
        localStorage.setItem('expo-language', lang);
      } catch {}
    }
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    document.documentElement.lang = language === 'th' ? 'th' : language === 'zh' ? 'zh' : 'en';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
};
