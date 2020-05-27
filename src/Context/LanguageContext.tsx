import React, { createContext, useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};
enum Language {
  english = "EN",
  greek = "GR",
}
interface LanguageContext {
  language?: Language;
  setLanguage?: any;
  isGreek?: any;
}

export const LanguageContext = createContext<LanguageContext>({
  language: Language.english,
});

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<Language>(
    JSON.parse(window.localStorage.getItem("lang") as string) ||
      Language.english
  );

  function isGreek() {
    if (language === "GR") return true;
    return false;
  }
  useEffect(() => {
    window.localStorage.setItem("lang", JSON.stringify(language));
  });

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isGreek }}>
      {children}
    </LanguageContext.Provider>
  );
}
