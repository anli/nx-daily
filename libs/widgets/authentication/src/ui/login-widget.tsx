import { type FC } from 'react';

import { SignUpForm, type SignUpFormProps } from '@entities/authentication';
import { LoginButton } from '@features/authentication';

type LoginWidgetProps = Omit<SignUpFormProps, 'renderSubmitButton'>;

export const LoginWidget: FC<LoginWidgetProps> = ({ ...rest }) => (
  <SignUpForm
    title="Login"
    subtitle="Please login to continue"
    renderSubmitButton={(handleSubmit, isValid) => (
      <LoginButton handleSubmit={handleSubmit} disabled={!isValid} />
    )}
    {...rest}
  />
);
