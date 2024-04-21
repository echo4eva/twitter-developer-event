// src/components/TwitterLogin.tsx
import React, { useState, useEffect } from 'react';
import { generateNonce, generateSignature } from './utils';

interface TwitterLoginProps {
  consumerKey: string;
  consumerSecret: string;
  callbackUrl: string;
  onLogin: (accessToken: string, accessTokenSecret: string) => void;
  onError: (error: Error) => void;
}

export const TwitterLogin: React.FC<TwitterLoginProps> = ({
  consumerKey,
  consumerSecret,
  callbackUrl,
  onLogin,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [accessTokenSecret, setAccessTokenSecret] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const oauthToken = urlParams.get('oauth_token');
    const oauthVerifier = urlParams.get('oauth_verifier');

    if (oauthToken && oauthVerifier) {
      handleTwitterCallback(oauthToken, oauthVerifier);
    }
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const { oauth_token, oauth_token_secret, oauth_callback_confirmed } =
        await getRequestToken(callbackUrl, consumerKey, consumerSecret);

      if (!oauth_callback_confirmed) {
        throw new Error('Callback URL not confirmed');
      }

      // Redirect the user to the Twitter authorization page
      const authorizationUrl = `https://api.twitter.com/oauth/authorize?oauth_token=${oauth_token}`;
      window.location.href = authorizationUrl;
    } catch (error) {
      onError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTwitterCallback = async (oauthToken: string, oauthVerifier: string) => {
    setIsLoading(true);

    try {
      const { oauth_access_token, oauth_access_token_secret } = await getAccessToken(
        oauthToken,
        oauthVerifier,
        consumerKey,
        consumerSecret
      );

      setAccessToken(oauth_access_token);
      setAccessTokenSecret(oauth_access_token_secret);
      onLogin(oauth_access_token, oauth_access_token_secret);
    } catch (error) {
      onError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const getRequestToken = async (
    callbackUrl: string,
    consumerKey: string,
    consumerSecret: string
  ): Promise<{
    oauth_token: string;
    oauth_token_secret: string;
    oauth_callback_confirmed: boolean;
  }> => {
    const oauthNonce = generateNonce();
    const oauthTimestamp = Math.floor(Date.now() / 1000).toString();
    const oauthSignatureMethod = 'HMAC-SHA1';
    const oauthVersion = '1.0';

    const authorizationHeader = `OAuth oauth_callback="${encodeURIComponent(
      callbackUrl
    )}",
          oauth_consumer_key="${consumerKey}",
          oauth_nonce="${oauthNonce}",
          oauth_signature="${generateSignature(
            consumerSecret,
            callbackUrl,
            oauthNonce,
            oauthTimestamp,
            consumerKey,
            oauthSignatureMethod
          )}",
          oauth_signature_method="${oauthSignatureMethod}",
          oauth_timestamp="${oauthTimestamp}",
          oauth_version="${oauthVersion}"`;

    const response = await fetch('https://api.twitter.com/oauth/request_token', {
      method: 'POST',
      headers: {
        'User-Agent': 'themattharris\' HTTP Client',
        'Host': 'api.twitter.com',
        'Accept': '*/*',
        'Authorization': authorizationHeader,
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed to obtain request token');
    }

    const responseBody = await response.text();
    const params = new URLSearchParams(responseBody);
    return {
      oauth_token: params.get('oauth_token')!,
      oauth_token_secret: params.get('oauth_token_secret')!,
      oauth_callback_confirmed: params.get('oauth_callback_confirmed') === 'true',
    };
  };

  const getAccessToken = async (
    oauthToken: string,
    oauthVerifier: string,
    consumerKey: string,
    consumerSecret: string
  ): Promise<{
    oauth_access_token: string;
    oauth_access_token_secret: string;
  }> => {
    const oauthNonce = generateNonce();
    const oauthTimestamp = Math.floor(Date.now() / 1000).toString();
    const oauthSignatureMethod = 'HMAC-SHA1';
    const oauthVersion = '1.0';

    const authorizationHeader = `OAuth oauth_verifier="${oauthVerifier}",
          oauth_consumer_key="${consumerKey}",
          oauth_nonce="${oauthNonce}",
          oauth_signature="${generateSignature(
            consumerSecret,
            `https://api.twitter.com/oauth/access_token?oauth_verifier=${oauthVerifier}`,
            oauthNonce,
            oauthTimestamp,
            consumerKey,
            oauthSignatureMethod
          )}",
          oauth_signature_method="${oauthSignatureMethod}",
          oauth_timestamp="${oauthTimestamp}",
          oauth_token="${oauthToken}",
          oauth_version="${oauthVersion}"`;

    const response = await fetch('https://api.twitter.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'User-Agent': 'themattharris\' HTTP Client',
        'Host': 'api.twitter.com',
        'Accept': '*/*',
        'Authorization': authorizationHeader,
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed to obtain access token');
    }

    const responseBody = await response.text();
    const params = new URLSearchParams(responseBody);
    return {
      oauth_access_token: params.get('oauth_access_token')!,
      oauth_access_token_secret: params.get('oauth_access_token_secret')!,
    };
  };

  return (
    <div>
      {!accessToken ? (
        <button onClick={() => {
        console.log('Login button clicked');
        handleLogin();
    }} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Log in with Twitter'}
        </button>
      ) : (
        <div>
          <p>Logged in with Twitter</p>
          <p>Access Token: {accessToken}</p>
          <p>Access Token Secret: {accessTokenSecret}</p>
        </div>
      )}
    </div>
  );
};

export default TwitterLogin;