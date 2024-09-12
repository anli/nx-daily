import { View } from 'react-native';

import { Button, Text } from '@shared/ui';

export default () => (
  <View className="flex-1 items-center justify-center">
    <Button>
      <Text>Test</Text>
    </Button>
    <Text className="text-red-500">Home page</Text>
  </View>
);
