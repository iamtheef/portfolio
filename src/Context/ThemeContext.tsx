import React, { createContext, useEffect, useState } from "react";
import { ITheme, IThemeProp, theme } from "../assets/theme";

type Props = {
  children: React.ReactNode;
};

interface ThemeContext {
  theme: ITheme;
  isDark?: boolean;
  setIsDark?: (v: boolean) => void;
  getTheme?: () => IThemeProp;
}

export const ThemeContext = createContext<ThemeContext>({
  theme,
});

export function ThemeProvider({ children }: Props) {
  let hours = new Date().getHours();
  const shouldBeDark = hours > 20 || hours < 7; // before 7am and after 8pm afternoon
  const [isDark, setIsDark] = useState(shouldBeDark);

  const changeBodyColors = () => {
    let { bgColor, fontColor } = isDark ? theme.dark : theme.light;
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
  };

  const getTheme = () => (isDark ? theme.dark : theme.light);

  useEffect(() => {
    changeBodyColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => changeBodyColors(), [isDark]);

  return (
    <ThemeContext.Provider value={{ theme, isDark, setIsDark, getTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
