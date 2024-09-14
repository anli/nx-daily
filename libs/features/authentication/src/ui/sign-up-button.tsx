import { type FC } from 'react';
import { Alert } from 'react-native';

import {
  useSignUpWithEmail,
  type SignUpFormValues,
} from '@entities/authentication';
import { Button, Text, type ButtonProps } from '@shared/ui';
import { type UseFormHandleSubmit } from 'react-hook-form';

type SignUpButtonProps = {
  title?: string;
  handleSubmit: UseFormHandleSubmit<SignUpFormValues, undefined>;
} & ButtonProps;

export const SignUpButton: FC<SignUpButtonProps> = ({
  title = 'Sign up with Email',
  handleSubmit,
  disabled,
  ...rest
}) => {
  const { mutate: signUpWithEmail, loading } = useSignUpWithEmail({
    onError: (error) => {
      Alert.alert('Error', error.message);
    },
  });

  return (
    <Button
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onPress={handleSubmit(signUpWithEmail)}
      disabled={loading || disabled}
      {...rest}
    >
      <Text>{title}</Text>
    </Button>
  );
};
