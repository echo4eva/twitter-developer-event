// Login.tsx
import React, { useState } from 'react';
import { auth } from 'twitter-api-sdk';

interface LoginProps {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
  onLogin: (accessToken: string, refreshToken: string) => void;
}

const Login: React.FC<LoginProps> = ({ clientId, clientSecret, callbackUrl, onLogin }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const authClient = new auth.OAuth2User({
        client_id: clientId,
        client_secret: clientSecret,
        callback: callbackUrl,
        scopes: ['tweet.read', 'users.read', 'offline.access'],
      });

      // Generate a random state value
      const state = Math.random().toString(36).substring(2, 15);

      const authUrl = authClient.generateAuthURL({
        state,
        code_challenge_method: 's256',
      });

      // Redirect the user to the generated authUrl
      window.location.href = authUrl;

      // Wait for the user to be redirected back with the code
      const code = new URLSearchParams(window.location.search).get('code');
      const receivedState = new URLSearchParams(window.location.search).get('state');
      if (!code || !receivedState || receivedState !== state) {
        throw new Error('Invalid state or no code received from Twitter');
      }

      await authClient.requestAccessToken(code);
      onLogin(authClient.accessToken, authClient.refreshToken);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Loading...' : 'Login with Twitter'}
      </button>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default Login;