import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { apiRequest } from '@/lib/queryClient';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated } = useAuth();
  const [theme, setTheme] = useState<Theme>('dark');
  const [isLoading, setIsLoading] = useState(true);

  // Load theme from user preferences or localStorage
  useEffect(() => {
    if (isAuthenticated && user) {
      setTheme((user.theme as Theme) || 'dark');
    } else {
      const savedTheme = localStorage.getItem('theme') as Theme;
      setTheme(savedTheme || 'dark');
    }
    setIsLoading(false);
  }, [user, isAuthenticated]);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    if (isAuthenticated) {
      try {
        await apiRequest('PATCH', '/api/auth/user/theme', { theme: newTheme });
      } catch (error) {
        console.error('Failed to update theme in user preferences:', error);
      }
    } else {
      localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLoading }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
