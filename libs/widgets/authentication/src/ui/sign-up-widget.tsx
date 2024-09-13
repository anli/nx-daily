import { type FC } from 'react';

import { SignUpForm, type SignUpFormProps } from '@entities/authentication';
import {
  GoogleAuthenticationButton,
  SignUpButton,
} from '@features/authentication';

type SignUpWidgetProps = Omit<SignUpFormProps, 'renderSubmitButton'>;

export const SignUpWidget: FC<SignUpWidgetProps> = ({ ...rest }) => (
  <SignUpForm
    renderSubmitButton={(handleSubmit) => (
      <SignUpButton handleSubmit={handleSubmit} />
    )}
    SocialLoginComponent={<GoogleAuthenticationButton />}
    {...rest}
  />
);
