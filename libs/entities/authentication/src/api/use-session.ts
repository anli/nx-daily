import { useEffect, useState } from 'react';

import { useSupabase } from '@shared/api';
import { Session } from '@supabase/supabase-js';

export const useSession = () => {
  const [session, setSession] = useState<Session | null>(null);
  const { client } = useSupabase();

  useEffect(() => {
    void client?.auth.getSession().then(({ data: { session: _session } }) => {
      setSession(_session);
    });

    client?.auth.onAuthStateChange((_event, _session) => {
      setSession(_session);
    });
  }, [client?.auth]);

  return { data: session };
};
