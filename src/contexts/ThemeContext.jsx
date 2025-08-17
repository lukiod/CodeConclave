import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const [themeMode, setThemeMode] = useState("light");
  const [systemTheme, setSystemTheme] = useState(getSystemTheme());
  const [isAutoMode, setIsAutoMode] = useState(true);

  // Watch system theme changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setSystemTheme(getSystemTheme());
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    const appliedTheme = isAutoMode ? systemTheme : themeMode;
    document.documentElement.setAttribute("data-theme", appliedTheme);
  }, [themeMode, systemTheme, isAutoMode]);

  const toggleTheme = () => {
    if (isAutoMode) {
      setIsAutoMode(false);
      setThemeMode(systemTheme === "dark" ? "light" : "dark");
    } else {
      if (themeMode === "light") setThemeMode("dark");
      else if (themeMode === "dark") setIsAutoMode(true); // cycle back to auto
    }
  };

  return (
    <ThemeContext.Provider value={{ themeMode, systemTheme, toggleTheme, isAutoMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
