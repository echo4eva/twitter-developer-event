// TwitterLoginPage.tsx
"use client"
// TwitterLoginPage.tsx
import React from 'react';
import TwitterLogin from '@/components/TwitterLogin';

interface TwitterLoginPageProps {
  consumerKey: string;
  consumerSecret: string;
  callbackUrl: string;
}

const TwitterLoginPage: React.FC<TwitterLoginPageProps> = ({
  consumerKey,
  consumerSecret,
  callbackUrl,
}) => {
  const handleLogin = (accessToken: string, accessTokenSecret: string) => {
    // Handle successful login
    console.log('Access Token:', accessToken);
    console.log('Access Token Secret:', accessTokenSecret);
  };

  const handleError = (error: Error) => {
    // Handle login error
    console.error('Error:', error);
  };

  return (
    <div>
      <h1>Twitter Login</h1>
      <TwitterLogin
        consumerKey={consumerKey}
        consumerSecret={consumerSecret}
        callbackUrl={callbackUrl}
        onLogin={handleLogin}
        onError={handleError}
      />
    </div>
  );
};

export default TwitterLoginPage;