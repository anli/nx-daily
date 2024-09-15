import { useSession } from '@entities/authentication';
import { Text } from '@shared/ui';
import { Redirect, Stack } from 'expo-router';

const defaultScreenOptions = {
  headerShown: false,
};

export default function AppLayout() {
  const { data: session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/on-boarding" />;
  }

  return <Stack screenOptions={defaultScreenOptions} />;
}
