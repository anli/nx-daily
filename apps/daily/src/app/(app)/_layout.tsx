import { useEffect } from 'react';

import { useSession } from '@entities/authentication';
import { useTheme } from '@entities/theme';
import { Redirect, SplashScreen, Stack } from 'expo-router';

const defaultScreenOptions = {
  headerShown: false,
};

export default function AppLayout() {
  const { data: session, isLoading: isSessionLoading } = useSession();
  const { isLoading: isThemeLoading } = useTheme();
  const isLoading = isSessionLoading || isThemeLoading;

  useEffect(() => {
    !isLoading && void SplashScreen.hideAsync();
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  if (!session) {
    return <Redirect href="/on-boarding" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={defaultScreenOptions} />
    </Stack>
  );
}
