import type { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import {
  SafeAreaView as NativeSafeAreaView,
  type SafeAreaViewProps,
} from 'react-native-safe-area-context';

export const SafeAreaView: FC<PropsWithChildren<SafeAreaViewProps>> = ({
  children,
  className,
  ...rest
}) => (
  <NativeSafeAreaView {...rest} style={styles.page}>
    {children}
  </NativeSafeAreaView>
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
