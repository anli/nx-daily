import { useSession } from '@entities/authentication';
import { Redirect, Stack } from 'expo-router';

const defaultScreenOptions = {
  headerShown: false,
};

export default function AppLayout() {
  const { data: session } = useSession();

  if (!session) {
    return <Redirect href="/on-boarding" />;
  }

  return <Stack screenOptions={defaultScreenOptions} />;
}
