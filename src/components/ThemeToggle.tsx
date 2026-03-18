'use client';

import { useEffect, useState } from 'react';
import { IconButton } from '@/once-ui/components';
import styles from './ThemeToggle.module.scss';

type Theme = 'light' | 'dark';

const THEME_KEY = 'magic-portfolio-theme';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(THEME_KEY) as Theme | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute('data-theme', stored);
    } else {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      setTheme(systemPreference);
      document.documentElement.setAttribute('data-theme', systemPreference);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!mounted) {
    return (
      <div className={styles.placeholder}>
        <IconButton icon="sun" variant="ghost" disabled />
      </div>
    );
  }

  return (
    <IconButton
      icon={theme === 'dark' ? 'sun' : 'moon'}
      variant="ghost"
      onClick={toggleTheme}
      tooltip={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={styles.toggle}
    />
  );
};
