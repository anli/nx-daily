import { useState } from 'react';

import { useSupabase } from '@shared/api';
import type {
  AuthError,
  Session,
  SignInWithPasswordCredentials,
  User,
} from '@supabase/supabase-js';
import invariant from 'tiny-invariant';

type UseLoginWithEmailProps = {
  onError?: (error: AuthError) => void;
  onSuccess?: (data: { user: User | null; session: Session | null }) => void;
};

export const useLoginWithEmail = ({
  onError,
  onSuccess,
}: UseLoginWithEmailProps = {}) => {
  const [loading, setLoading] = useState(false);
  const { client } = useSupabase();

  const mutateAsync = async (values: SignInWithPasswordCredentials) => {
    invariant(client, 'useSupabase.client is not initialized');

    setLoading(true);
    const response = await client?.auth.signInWithPassword(values);
    setLoading(false);
    if (response?.error) {
      return onError?.(response?.error);
    }

    onSuccess?.(response?.data);
    return response?.data;
  };

  return {
    mutate: (values: SignInWithPasswordCredentials) => void mutateAsync(values),
    loading,
  };
};
