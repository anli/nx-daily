import { type FC } from 'react';
import { Alert } from 'react-native';

import { supabase } from '@shared/api';
import { Button, Text, type ButtonProps } from '@shared/ui';

type LogoutButtonProps = {
  title?: string;
} & ButtonProps;

export const LogoutButton: FC<LogoutButtonProps> = ({
  title = 'Sign Out',
  ...rest
}) => {
  const handleLogout = () => {
    Alert.alert('Confirm', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: () => void supabase.auth.signOut(),
      },
    ]);
  };

  return (
    <Button variant="destructive" onPress={handleLogout} {...rest}>
      <Text>{title}</Text>
    </Button>
  );
};
