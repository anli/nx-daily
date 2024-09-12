import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, H3, Input, Muted, Text } from '@shared/ui';
import { SafeAreaView } from 'react-native-safe-area-context';

export default () => {
  const [value, setValue] = useState('');

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <SafeAreaView edges={['top']} style={styles.page}>
      <View className="px-8 flex-row justify-end">
        <Button className="" variant="ghost">
          <Text>Login</Text>
        </Button>
      </View>
      <View className="flex-1 items-center justify-center">
        <View className="p-8 w-full">
          <H3 className="text-center">Create an account</H3>
          <View className="h-2" />
          <Muted className="text-center">
            Enter your email below to create your account
          </Muted>
          <View className="h-8" />
          <Input
            placeholder="name@example.com"
            value={value}
            onChangeText={onChangeText}
            aria-labelledby="inputLabel"
            aria-errormessage="inputError"
          />
          <View className="h-4" />
          <Button>
            <Text>Sign in with Email</Text>
          </Button>
          <View className="h-8" />
          <Muted className="text-center">OR CONTINUE WITH</Muted>
          <View className="h-8" />
          <Button variant="outline">
            <Text>Google</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
