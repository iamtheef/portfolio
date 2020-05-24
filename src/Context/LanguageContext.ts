import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

enum Language {
  english = "EN",
  greek = "GR",
}

export const LanguageContext = createContext<Language>(Language.english);

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<Language>(Language.english);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
