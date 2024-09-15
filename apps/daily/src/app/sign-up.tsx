import { View } from 'react-native';

import { Button, SafeAreaView, Text } from '@shared/ui';
import { SignUpWidget } from '@widgets/authentication';
import { Link } from 'expo-router';

export default function SignUp() {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
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
  );
}
