import React, { createContext, useState, useEffect } from "react";
import * as l from "../assets/Languages";

type Props = {
  children: React.ReactNode;
};
export enum ILanguage {
  english = "EN",
  greek = "GR",
}
interface LanguageContext {
  language: ILanguage;
  setLanguage?: any;
  getContent?: any;
  getTags?: any;
}

export const LanguageContext = createContext<LanguageContext>({
  language: ILanguage.english,
});

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<ILanguage>(
    JSON.parse(window.localStorage.getItem("lang") as string) ||
      ILanguage.english
  );

  function getContent(): object {
    return l.content[language];
  }

  function getTags(): object {
    return l.tags[language];
  }

  useEffect(() => {
    window.localStorage.setItem("lang", JSON.stringify(language));
  });

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, getContent, getTags }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
