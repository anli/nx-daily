import { type FC } from 'react';
import { View, type ViewProps } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { cn, H3, Input, Label, Muted } from '@shared/ui';
import type { ClassValue } from 'clsx';
import { useForm, Controller, type UseFormHandleSubmit } from 'react-hook-form';
import * as yup from 'yup';

export type SignUpFormValues = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export type SignUpFormProps = {
  title?: string;
  subtitle?: string;
  className?: ClassValue;
  renderSubmitButton: (
    handleSubmit: UseFormHandleSubmit<SignUpFormValues, undefined>
  ) => React.ReactNode;
  SocialLoginComponent?: React.ReactNode;
} & ViewProps;

export const SignUpForm: FC<SignUpFormProps> = ({
  title = 'Create an account',
  subtitle = 'Enter your email below to create your account',
  className,
  renderSubmitButton,
  SocialLoginComponent,
  ...rest
}) => {
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: yupResolver(schema),
  });

  return (
    <View className={className ? cn('w-full', className) : 'w-full'} {...rest}>
      <View>
        <View className="gap-2">
          <H3 className="text-center">{title}</H3>
          <View className="h-2" />
          <Muted className="text-center">{subtitle}</Muted>
        </View>

        <View className="h-4" />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Label nativeID="email">Email</Label>
              <View className="h-2" />
              <Input
                placeholder="name@example.com"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                aria-labelledby="email"
                aria-errormessage="inputError"
              />
            </>
          )}
          name="email"
        />

        <View className="h-4" />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Label nativeID="password">Password</Label>
              <View className="h-2" />
              <Input
                placeholder="Enter a strong, secure password"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                aria-labelledby="password"
                aria-errormessage="inputError"
              />
            </>
          )}
          name="password"
        />

        <View className="h-4" />

        {renderSubmitButton(handleSubmit)}
      </View>

      {!!SocialLoginComponent && (
        <>
          <View className="h-8" />
          <Muted className="text-center">━ OR CONTINUE WITH ━</Muted>
          <View className="h-8" />

          {SocialLoginComponent}
        </>
      )}
    </View>
  );
};
