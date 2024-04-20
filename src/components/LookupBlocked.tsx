import React, { useState, useEffect } from 'react';
import { requestToken, accessToken, getRequest } from '../utils/TwitterBlocksLookup';

interface TwitterBlocksLookupProps {
  userId: string;
}

const TwitterBlocksLookup: React.FC<TwitterBlocksLookupProps> = ({ userId }) => {
  const [oAuthRequestToken, setOAuthRequestToken] = useState<{
    oauth_token: string;
    oauth_token_secret: string;
  } | null>(null);
  const [oAuthAccessToken, setOAuthAccessToken] = useState<{
    oauth_token: string;
    oauth_token_secret: string;
  } | null>(null);
  const [blockedUsers, setBlockedUsers] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchBlockedUsers = async () => {
      try {
        // Get request token
        const requestTokenResponse = await requestToken();
        setOAuthRequestToken(requestTokenResponse);

        // Get authorization
        const authorizeURL = new URL('https://api.twitter.com/oauth/authorize');
        authorizeURL.searchParams.append('oauth_token', requestTokenResponse.oauth_token);
        window.open(authorizeURL.href, '_blank');

        // Get the access token
        const pin = prompt('Paste the PIN here:');
        const accessTokenResponse = await accessToken(requestTokenResponse, pin!.trim());
        setOAuthAccessToken(accessTokenResponse);

        // Make the request
        const response = await getRequest(accessTokenResponse);
        setBlockedUsers(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchBlockedUsers();
  }, [userId]);

  return (
    <div>
      {blockedUsers ? (
        <ul>
          {blockedUsers.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TwitterBlocksLookup;