'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // 从 localStorage 读取保存的语言设置
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
      setLanguage(savedLang);
      setIsLoading(false);
      return;
    }
    
    // 如果没有保存的语言设置，尝试从服务器获取语言设置
    fetch('/api/detect-language')
      .then(res => res.json())
      .then(data => {
        if (data.language === 'ru' || data.language === 'en') {
          setLanguage(data.language);
        }
      })
      .catch(() => {
        // 如果获取失败，使用浏览器语言
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.includes('ru') || browserLang.includes('uz')) {
          setLanguage('ru');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations['ru'][key] || key;
  };

  // 防止水合错误
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: 'ru', setLanguage: handleSetLanguage, t: (key) => translations['ru'][key] || key, isLoading: true }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
