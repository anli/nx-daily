import { View } from 'react-native';

import { Button, SafeAreaView, Text } from '@shared/ui';
import { SignUpWidget } from '@widgets/authentication';

export default () => (
  <SafeAreaView edges={['top']}>
    <View className="px-8 flex-row justify-end">
      <Button className="" variant="ghost">
        <Text>Login</Text>
      </Button>
    </View>
    <View className="flex-1 items-center justify-center">
      <SignUpWidget className="p-8" />
    </View>
  </SafeAreaView>
);
