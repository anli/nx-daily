import { View } from 'react-native';

import { ThemeSwitchButton } from '@entities/theme';
import { Button, SafeAreaView, Text } from '@shared/ui';
import { SignUpWidget } from '@widgets/authentication';
import { Link } from 'expo-router';
import { Stack } from 'expo-router';

export default function SignUp() {
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
          <SignUpWidget className="p-8" />
        </View>
        <View className="px-8">
          <Link href="/login" asChild>
            <Button className="self-center" variant="link">
              <Text>Already have an account? Login</Text>
            </Button>
          </Link>
        </View>
      </SafeAreaView>
    </>
  );
}
