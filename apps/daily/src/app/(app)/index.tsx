import { View } from 'react-native';

import { useSession } from '@entities/authentication';
import { LogoutButton } from '@features/authentication';
import { H1, Lead, SafeAreaView } from '@shared/ui';

export default function Index() {
  const { data } = useSession();

  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <View className="px-8">
        <H1>Welcome,</H1>
        <Lead>{data?.user.email}</Lead>
      </View>

      <View className="h-4" />
      <View className="px-8">
        <LogoutButton />
      </View>
    </SafeAreaView>
  );
}
