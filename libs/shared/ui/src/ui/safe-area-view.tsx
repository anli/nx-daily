import type { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import {
  SafeAreaView as NativeSafeAreaView,
  type SafeAreaViewProps,
} from 'react-native-safe-area-context';

export const SafeAreaView: FC<PropsWithChildren<SafeAreaViewProps>> = ({
  children,
  style,
  ...rest
}) => (
  <NativeSafeAreaView {...rest} style={[styles.page, style]}>
    {children}
  </NativeSafeAreaView>
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
