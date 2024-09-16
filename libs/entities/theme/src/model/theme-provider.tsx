import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';
import { Platform } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Theme as NavigationTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native';
import { NAV_THEME, setAndroidNavigationBar, useColorScheme } from '@shared/ui';
import { StatusBar } from 'expo-status-bar';

const LIGHT_THEME: NavigationTheme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: NavigationTheme = {
  dark: true,
  colors: NAV_THEME.dark,
};

const ThemeContext = createContext<{
  data?: { colorScheme: string; isDarkColorScheme: boolean } | null;
  isLoading: boolean;
  setColorScheme?: (scheme: 'light' | 'dark' | 'system') => void;
  toggleColorScheme?: () => void;
}>({
  data: undefined,
  isLoading: true,
});

export const useTheme = () => {
  const value = useContext(ThemeContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useTheme must be wrapped in a <ThemeProvider />');
    }
  }

  return value;
};

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void (async () => {
      const theme = await AsyncStorage.getItem('theme');
      if (Platform.OS === 'web') {
        // Adds the background color to the html element to prevent white background on overscroll.
        document.documentElement.classList.add('bg-background');
      }
      if (!theme) {
        void AsyncStorage.setItem('theme', colorScheme);
        setIsLoading(false);
        return;
      }
      const colorTheme = theme === 'dark' ? 'dark' : 'light';
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);
        void setAndroidNavigationBar(colorTheme);

        setIsLoading(false);
        return;
      }
      setIsLoading(true);
    })().finally(() => {
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({
      data: { colorScheme, isDarkColorScheme },
      isLoading,
      setColorScheme,
      toggleColorScheme: async () => {
        const newTheme = isDarkColorScheme ? 'light' : 'dark';
        await AsyncStorage.setItem('theme', newTheme);
        setColorScheme(newTheme);
        await setAndroidNavigationBar(newTheme);
      },
    }),
    [colorScheme, isDarkColorScheme, isLoading, setColorScheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <NavigationThemeProvider
        value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}
      >
        <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
        {children}
      </NavigationThemeProvider>
    </ThemeContext.Provider>
  );
};
