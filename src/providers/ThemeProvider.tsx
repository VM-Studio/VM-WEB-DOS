/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

// Types
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component
export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'e-ticketpro-theme',
  ...props
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  [key: string]: any;
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Update theme in DOM and localStorage
  const applyTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    
    // Remove both classes first
    root.classList.remove('light', 'dark');
    
    // Add the new theme class
    root.classList.add(newTheme);
    
    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', newTheme === 'dark' ? '#000000' : '#ffffff');
    }
  };

  // Set theme function
  const setTheme = (newTheme: Theme) => {
    try {
      localStorage.setItem(storageKey, newTheme);
      setThemeState(newTheme);
      applyTheme(newTheme);
    } catch (error) {
      console.error('Error setting theme:', error);
    }
  };

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Initialize theme on mount
  useEffect(() => {
    try {
      // Get stored theme or use default (light)
      const storedTheme = localStorage.getItem(storageKey) as Theme | null;
      const initialTheme = storedTheme || defaultTheme;
      
      setThemeState(initialTheme);
      applyTheme(initialTheme);
    } catch (error) {
      // Fallback to default theme if localStorage is not available
      setThemeState(defaultTheme);
      applyTheme(defaultTheme);
    }
    
    setMounted(true);
  }, [storageKey, defaultTheme]);

  // Listen for theme changes in other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === storageKey && e.newValue) {
        const newTheme = e.newValue as Theme;
        setThemeState(newTheme);
        applyTheme(newTheme);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [storageKey]);

  // Prevent flash of incorrect theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook to use theme
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}

// Script component to inject into head (prevents FOUC)
export function ThemeScript({
  storageKey = 'e-ticketpro-theme',
  defaultTheme = 'light'
}: {
  storageKey?: string;
  defaultTheme?: Theme;
}) {
  const script = `
    (function() {
      try {
        const theme = localStorage.getItem('${storageKey}') || '${defaultTheme}';
        document.documentElement.classList.add(theme);
      } catch (e) {
        document.documentElement.classList.add('${defaultTheme}');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
