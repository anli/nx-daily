import { View } from 'react-native';

import { Button, H1, Lead, SafeAreaView, Text } from '@shared/ui';
import { Link } from 'expo-router';

export default function OnBoarding() {
  return (
    <SafeAreaView edges={['top']}>
      <View className="flex-1 justify-center">
        <H1 className="mx-6 text-center">Daily</H1>
        <View className="h-4" />
        <Lead className="mx-6 text-center">
          Daily is a task app for the modern age. It is a place where you can
          complete your tasks and get things done.
        </Lead>
        <View className="h-8" />
        <Link href="/login" asChild>
          <Button className="mx-6 self-center">
            <Text>Get started</Text>
          </Button>
        </Link>
      </View>
    </SafeAreaView>
  );
}
