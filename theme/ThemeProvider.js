import { useState, useEffect } from "react";
import ThemeContext from "./context";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getTheme("theme", "light"));

  const toggleColorMode = () => {
    setTheme(theme => {
      const newTheme = theme === "light" ? "dark" : "light";
      localStorage.setItem('theme', newTheme)
      return newTheme;      
    });
  }

  useEffect(() => {
    if (theme === 'light') document.documentElement.classList.remove('dark')
    else document.documentElement.classList.add('dark')
  }, [theme])

  return <ThemeContext.Provider value={{ colorMode: theme, toggleColorMode }}>{children}</ThemeContext.Provider>
}


function getTheme(key, fallback) {
  if (typeof window === "undefined") return undefined
  let theme
  try {
    theme = localStorage.getItem(key) || undefined
  } catch (e) {
    // Unsupported
  }
  return theme || fallback
}
