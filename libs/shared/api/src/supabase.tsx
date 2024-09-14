import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';
import { AppState } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import invariant from 'tiny-invariant';

const authConfig = {
  storage: AsyncStorage,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
};

const SupabaseContext = createContext<{
  client?: SupabaseClient;
}>({
  client: undefined,
});

export const useSupabase = () => {
  const value = useContext(SupabaseContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSupabase must be wrapped in a <SupabaseProvider />');
    }
  }

  return value;
};

type SupabaseProviderProps = PropsWithChildren<{
  url: string;
  anonKey: string;
}>;

export const SupabaseProvider: FC<SupabaseProviderProps> = ({
  url,
  anonKey,
  children,
}) => {
  const [client, setClient] = useState<SupabaseClient | undefined>(undefined);

  useEffect(() => {
    invariant(url, 'SupabaseProvider.url is not set');
    invariant(anonKey, 'SupabaseProvider.anonKey is not set');

    setClient(createClient(url, anonKey, { auth: authConfig }));
  }, [url, anonKey]);

  useEffect(() => {
    AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        void client?.auth.startAutoRefresh();
      } else {
        void client?.auth.stopAutoRefresh();
      }
    });
  }, [client]);

  const value = useMemo(
    () => ({
      client,
    }),
    [client]
  );

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  );
};
