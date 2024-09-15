import type { FC } from 'react';

import { Button, MoonStar, Sun, type ButtonProps } from '@shared/ui';

import { useTheme } from '../model/theme-provider';

export const ThemeSwitchButton: FC<ButtonProps> = ({ ...rest }) => {
  const { data: theme, toggleColorScheme } = useTheme();

  return (
    <Button
      className="self-end"
      size="icon"
      variant="ghost"
      onPress={toggleColorScheme}
      {...rest}
    >
      {theme?.colorScheme === 'dark' ? <MoonStar /> : <Sun />}
    </Button>
  );
};
