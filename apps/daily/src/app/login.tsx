import { View } from 'react-native';

import { ThemeSwitchButton } from '@entities/theme';
import { Button, SafeAreaView, Text } from '@shared/ui';
import { LoginWidget } from '@widgets/authentication';
import { Link, Stack } from 'expo-router';

export default function Login() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitle: '',
          headerRight: () => <ThemeSwitchButton className="mr-4" />,
          headerShadowVisible: false,
        }}
      />
      <SafeAreaView>
        <View className="flex-1 items-center justify-center">
          <LoginWidget className="p-8" />
        </View>
        <View className="px-8">
          <Link href="/sign-up" asChild>
            <Button className="self-center" variant="link">
              <Text>Don&apos;t have an account? Create</Text>
            </Button>
          </Link>
        </View>
      </SafeAreaView>
    </>
  );
}
