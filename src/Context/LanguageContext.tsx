import React, { createContext, useState } from "react";

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
  const [language, setLanguage] = useState<Language>(Language.english);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
