// src/utils/TwitterBlocksLookup.ts
import got from 'got';
import crypto from 'crypto';
import OAuth, { Token } from 'oauth-1.0a';
import qs from 'querystring';
import readline from 'readline';

// The code below sets the consumer key and consumer secret from your environment variables
// To set environment variables on macOS or Linux, run the export commands below from the terminal:
// export CONSUMER_KEY='YOUR-KEY'
// export CONSUMER_SECRET='YOUR-SECRET'
const consumer_key = process.env.CONSUMER_KEY;
const consumer_secret = process.env.CONSUMER_SECRET;

// Be sure to replace your-user-id with your own user ID or one of an authenticated user
// You can find a user ID by using the user lookup endpoint
const id = process.env.USER_ID;
const endpointURL = `https://api.twitter.com/2/users/${id}/blocking`;

// this example uses PIN-based OAuth to authorize the user
const requestTokenURL = 'https://api.twitter.com/oauth/request_token?oauth_callback=oob';
const authorizeURL = new URL('https://api.twitter.com/oauth/authorize');
const accessTokenURL = 'https://api.twitter.com/oauth/access_token';
const oauth = new OAuth({
    consumer: {
      key: consumer_key!,
      secret: consumer_secret!
    },
    signature_method: 'HMAC-SHA1',
    hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
  });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function input(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, (out) => {
      rl.close();
      resolve(out);
    });
  });
}

export async function requestToken(): Promise<{ oauth_token: string; oauth_token_secret: string }> {
  const authHeader = oauth.toHeader(oauth.authorize({ url: requestTokenURL, method: 'POST' }));

  const req = await got.post(requestTokenURL, {
    headers: {
      Authorization: authHeader['Authorization']
    }
  });
  if (req.body) {
    return qs.parse(req.body) as { oauth_token: string; oauth_token_secret: string };
  } else {
    throw new Error('Cannot get an OAuth request token');
  }
}

export async function accessToken(
  { oauth_token, oauth_token_secret }: { oauth_token: string; oauth_token_secret: string },
  verifier: string
): Promise<{ oauth_token: string; oauth_token_secret: string }> {
  const authHeader = oauth.toHeader(oauth.authorize({ url: accessTokenURL, method: 'POST' }));
  const path = `https://api.twitter.com/oauth/access_token?oauth_verifier=${verifier}&oauth_token=${oauth_token}`;
  const req = await got.post(path, {
    headers: {
      Authorization: authHeader['Authorization']
    }
  });
  if (req.body) {
    return qs.parse(req.body) as { oauth_token: string; oauth_token_secret: string };
  } else {
    throw new Error('Cannot get an OAuth request token');
  }
}

export async function getRequest({ oauth_token, oauth_token_secret }: { oauth_token: string; oauth_token_secret: string }): Promise<any> {
  const token: Token = {
    key: oauth_token,
    secret: oauth_token_secret
  };

  const authHeader = oauth.toHeader(oauth.authorize({ url: endpointURL, method: 'GET' }, token));

  const req = await got.get(endpointURL, {
    responseType: 'json',
    headers: {
      Authorization: authHeader['Authorization'],
      'user-agent': 'v2BlocksLookupJS'
    }
  });
  if (req.body) {
    return req.body;
  } else {
    throw new Error('Unsuccessful request');
  }
}

export default (async () => {
  try {
    // Get request token
    const oAuthRequestToken = await requestToken();
    // Get authorization
    authorizeURL.searchParams.append('oauth_token', oAuthRequestToken.oauth_token);
    console.log('Please go here and authorize:', authorizeURL.href);
    const pin = await input('Paste the PIN here: ');
    // Get the access token
    const oAuthAccessToken = await accessToken(oAuthRequestToken, pin.trim());
    // Make the request
    const response = await getRequest(oAuthAccessToken);
    console.dir(response, { depth: null });
  } catch (e) {
    console.log(e);
    process.exit(-1);
  }
  process.exit();
})();