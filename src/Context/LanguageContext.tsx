import React, { createContext, useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};
enum Language {
  english = "EN",
  greek = "GR",
}
interface LanguageContext {
  language: Language;
  setLanguage?: any;
}

export const LanguageContext = createContext<LanguageContext>({
  language: Language.english,
});

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<Language>(
    JSON.parse(window.localStorage.getItem("lang") as string) ||
      Language.english
  );

  useEffect(() => {
    window.localStorage.setItem("lang", JSON.stringify(language));
  });

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
