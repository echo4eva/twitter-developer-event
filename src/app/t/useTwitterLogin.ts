// useTwitterLogin.ts
import { useState } from 'react';
import { auth } from 'twitter-api-sdk';

interface LoginState {
  loading: boolean;
  error: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const useTwitterLogin = (
  clientId: string,
  clientSecret: string,
  callbackUrl: string
): [LoginState, () => Promise<void>] => {
  const [state, setState] = useState<LoginState>({
    loading: false,
    error: null,
    accessToken: null,
    refreshToken: null,
  });

  const login = async () => {
    setState((prevState) => ({ ...prevState, loading: true, error: null }));

    try {
      const authClient = new auth.OAuth2User({
        client_id: clientId,
        client_secret: clientSecret,
        callback: callbackUrl,
        scopes: ['tweet.read', 'users.read', 'offline.access'],
      });

      const authUrl = authClient.generateAuthURL({
        state: 'my-state-value',
        code_challenge_method: 's256',
      });

      // Redirect the user to the generated authUrl
      window.location.href = authUrl;

      // Wait for the user to be redirected back with the code
      const code = new URLSearchParams(window.location.search).get('code');
      if (!code) {
        throw new Error('No code received from Twitter');
      }

      await authClient.requestAccessToken(code);
      setState({
        loading: false,
        error: null,
        accessToken: authClient.accessToken,
        refreshToken: authClient.refreshToken,
      });
    } catch (err) {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        error: (err as Error).message,
      }));
    }
  };

  return [state, login];
};

export default useTwitterLogin;