import { type FC } from 'react';

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
    void supabase.auth.signOut();
  };

  return (
    <Button onPress={handleLogout} {...rest}>
      <Text>{title}</Text>
    </Button>
  );
};
