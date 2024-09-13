import { type FC } from 'react';

import { type SignUpFormValues } from '@entities/authentication';
import { Button, Text } from '@shared/ui';
import { type UseFormHandleSubmit } from 'react-hook-form';

type SignUpButtonProps = {
  handleSubmit: UseFormHandleSubmit<SignUpFormValues, undefined>;
};

export const SignUpButton: FC<SignUpButtonProps> = ({ handleSubmit }) => {
  const handleLogin = (_: SignUpFormValues) => {
    // do something
  };

  return (
    <Button onPress={() => void handleSubmit(handleLogin)}>
      <Text>Sign up with Email</Text>
    </Button>
  );
};
