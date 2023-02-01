import { useContext } from "react";
import { Theme, ThemeContext, LOCAL_STORAGE_LOCAL_THEME } from "./ThemeContext";

interface UseThemeResults {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResults {

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_LOCAL_THEME, newTheme);
  }

  return {
    theme,
    toggleTheme
  }
}