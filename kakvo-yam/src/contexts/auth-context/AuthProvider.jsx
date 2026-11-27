import { useEffect, useMemo, useState } from 'react';
import AuthContext from './AuthContext';
import { getSession, subscribeToAuthChanges } from '../../api/auth.api.js';

export default function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const subscription = subscribeToAuthChanges((_event, nextSession) => {
      if (isMounted) {
        setSession(nextSession);
        setLoading(false);
      }
    });

    getSession()
      .then((currentSession) => {
        if (isMounted) setSession(currentSession);
      })
      .catch((authError) => {
        if (isMounted) setError(authError.message || 'Unable to restore session.');
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const value = useMemo(() => ({
    session,
    user: session?.user ?? null,
    loading,
    error,
    isAuthenticated: Boolean(session),
  }), [session, loading, error]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
