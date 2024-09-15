import { View } from 'react-native';

import { Button, SafeAreaView, Text } from '@shared/ui';
import { LoginWidget } from '@widgets/authentication';
import { Link } from 'expo-router';

export default function Login() {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
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
  );
}
