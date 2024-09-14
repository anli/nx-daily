import * as React from 'react';
import { Platform } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, ThemeProvider } from '@react-navigation/native';
import { SupabaseProvider } from '@shared/api';
import { NAV_THEME, useColorScheme } from '@shared/ui';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import invariant from 'tiny-invariant';

import '../../global.css';

invariant(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  'EXPO_PUBLIC_SUPABASE_URL is not set'
);
invariant(
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
  'EXPO_PUBLIC_SUPABASE_ANON_KEY is not set'
);
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};
const defaultScreenOptions = {
  headerShown: false,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before getting the color scheme.
void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  React.useEffect(() => {
    void (async () => {
      const theme = await AsyncStorage.getItem('theme');
      if (Platform.OS === 'web') {
        // Adds the background color to the html element to prevent white background on overscroll.
        document.documentElement.classList.add('bg-background');
      }
      if (!theme) {
        void AsyncStorage.setItem('theme', colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      const colorTheme = theme === 'dark' ? 'dark' : 'light';
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);

        setIsColorSchemeLoaded(true);
        return;
      }
      setIsColorSchemeLoaded(true);
    })().finally(() => {
      void SplashScreen.hideAsync();
    });
  }, [colorScheme, setColorScheme]);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <SupabaseProvider url={supabaseUrl} anonKey={supabaseAnonKey}>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
        <Stack screenOptions={defaultScreenOptions} />
      </ThemeProvider>
    </SupabaseProvider>
  );
}
