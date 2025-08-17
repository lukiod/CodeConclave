import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { toggleTheme, currentTheme, isAutoMode } = useTheme();

  return (
    <button onClick={toggleTheme} className="px-3 py-2 rounded border">
      {isAutoMode ? "Auto" : currentTheme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
