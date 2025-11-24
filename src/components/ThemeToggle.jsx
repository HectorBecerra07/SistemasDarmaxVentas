import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Al cargar, leemos tema guardado o el preferido del sistema
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-dark/80 shadow-lg border border-light/60 dark:border-white/20 hover:scale-105 transition-transform"
      aria-label="Cambiar tema"
    >
      {/* ☀️ / 🌙 según el tema */}
      <span className="text-xl">
        {theme === "light" ? "🌙" : "☀️"}
      </span>
    </button>
  );
};

export default ThemeToggle;
