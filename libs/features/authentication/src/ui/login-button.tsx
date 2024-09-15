import { type FC } from 'react';
import { Alert } from 'react-native';

import {
  useLoginWithEmail,
  type SignUpFormValues,
} from '@entities/authentication';
import { Button, Text, type ButtonProps } from '@shared/ui';
import { router } from 'expo-router';
import { type UseFormHandleSubmit } from 'react-hook-form';

type LoginButtonProps = {
  title?: string;
  handleSubmit: UseFormHandleSubmit<SignUpFormValues, undefined>;
} & ButtonProps;

export const LoginButton: FC<LoginButtonProps> = ({
  title = 'Login',
  handleSubmit,
  disabled,
  ...rest
}) => {
  const { mutate: loginWithEmail, loading } = useLoginWithEmail({
    onError: (error) => {
      Alert.alert('Error', error.message);
    },
    onSuccess: () => {
      router.replace('/');
    },
  });

  return (
    <Button
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onPress={handleSubmit(loginWithEmail)}
      disabled={loading || disabled}
      {...rest}
    >
      <Text>{title}</Text>
    </Button>
  );
};
