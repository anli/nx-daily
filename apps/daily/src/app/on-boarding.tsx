import { View } from 'react-native';

import { Button, H1, Lead, SafeAreaView, Text } from '@shared/ui';
import { Link } from 'expo-router';

export default function OnBoarding() {
  return (
    <SafeAreaView edges={['top']}>
      <View className="flex-1 justify-center">
        <H1 className="text-center mx-6">Daily</H1>
        <View className="h-4" />
        <Lead className="text-center mx-6">
          Daily is a task app for the modern age. It is a place where you can
          complete your tasks and get things done.
        </Lead>
        <View className="h-8" />
        <Link href="/login" asChild>
          <Button className="self-center mx-6">
            <Text>Get started</Text>
          </Button>
        </Link>
      </View>
    </SafeAreaView>
  );
}
