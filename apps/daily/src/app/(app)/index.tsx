import { View } from 'react-native';

import { useSession } from '@entities/authentication';
import { useSupabase } from '@shared/api';
import { Button, H1, Lead, SafeAreaView, Text } from '@shared/ui';

export default function Index() {
  const { client } = useSupabase();
  const { data } = useSession();

  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <View className="px-8">
        <H1>Welcome,</H1>
        <Lead>{data?.user.email}</Lead>
      </View>

      <View className="h-4" />
      <View className="px-8">
        <Button
          onPress={() => {
            void client?.auth.signOut();
          }}
        >
          <Text>Sign Out</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
