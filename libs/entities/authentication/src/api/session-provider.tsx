import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';

import { useSupabase } from '@shared/api';
import type { Session } from '@supabase/supabase-js';

const SessionContext = createContext<{
  data?: Session | null;
}>({
  data: undefined,
});

export const useSession = () => {
  const value = useContext(SessionContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
};

export const SessionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<Session | null | undefined>(undefined);
  const { client } = useSupabase();

  useEffect(() => {
    void client?.auth.getSession().then(({ data: { session: _session } }) => {
      setData(_session);
    });

    client?.auth.onAuthStateChange((_event, _session) => {
      setData(_session);
    });
  }, [client?.auth]);

  const value = useMemo(
    () => ({
      data,
    }),
    [data]
  );

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
