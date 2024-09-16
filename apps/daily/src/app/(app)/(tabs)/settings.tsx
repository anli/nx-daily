import { StyleSheet, View } from 'react-native';

import { ThemeSwitchButton, useTheme } from '@entities/theme';
import { LogoutButton } from '@features/authentication';
import { Button, ChevronRight, H3, Muted, Separator, Text } from '@shared/ui';
import * as Application from 'expo-application';
import { ScrollView } from 'react-native-gesture-handler';

export default function Settings() {
  const { data: theme } = useTheme();

  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
      <View>
        <View className="h-5" />
        <View className="mx-5 gap-2">
          <H3>Set Up Your Profile</H3>
          <Muted>
            Personalize your account to get the most out of our app.
          </Muted>
          <Button variant="outline">
            <Text>Create Profile</Text>
          </Button>
        </View>

        <Separator className="mx-5 my-6" />

        <H3 className="mx-5">App Settings</H3>

        <View className="h-4" />

        <Button
          variant="ghost"
          className=" flex-row items-center justify-between gap-2"
        >
          <Text>
            {theme?.colorScheme === 'dark' ? 'Dark Theme' : 'Light Theme'}
          </Text>
          <ThemeSwitchButton nativeID="theme" />
        </Button>

        <Separator className="mx-5 my-6" />

        <H3 className="mx-5">About</H3>

        <View className="h-4" />

        <Button
          variant="ghost"
          className="flex-row items-center justify-between gap-2"
        >
          <Text>Privacy Policy</Text>
          <ChevronRight className="text-accent-foreground" />
        </Button>

        <View className="h-2" />

        <Button
          variant="ghost"
          className="flex-row items-center justify-between gap-2"
        >
          <Text>Terms of Service</Text>
          <ChevronRight className="text-accent-foreground" />
        </Button>
      </View>

      <View>
        <View>
          <LogoutButton className="m-5" />
        </View>
        {!!Application.nativeApplicationVersion && (
          <Muted className="mx-5 text-center">
            App Version: {Application.nativeApplicationVersion}
          </Muted>
        )}
        <View className="h-5" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
