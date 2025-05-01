"use client";
import { createContext, useState, useEffect, useMemo, ReactNode } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
});

export const Layout = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setTheme('dark');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sahana Jagadeesh Tavari</h1>
          <div className="flex items-center gap-4">
            <a href="/about" className="text-sm underline hover:text-primary transition">About</a>
          <button onClick={toggleTheme} aria-label="Toggle Dark Mode" className="text-xl">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="container mx-auto p-4 text-center text-sm">
          © {new Date().getFullYear()} Sahana Tavari
        </footer>
      </div>
    </ThemeContext.Provider>
  );
};
