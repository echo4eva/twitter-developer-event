import { Client, User, UserPublicMetrics } from 'twitter.js';
import dotenv from 'dotenv';
import { TwitterUser } from './types';

dotenv.config();

export const twitterClient = new Client();

export async function fetchTwitterUser(username: string): Promise<TwitterUser> {
  await twitterClient.loginWithBearerToken(process.env.TWITTER_BEARER_TOKEN!);
  const user = await twitterClient.users.fetchByUsername(username);
  const publicMetrics = user.publicMetrics as UserPublicMetrics;

  return {
    name: user.name,
    description: user.description,
    followersCount: publicMetrics.followersCount,
    followingCount: publicMetrics.followingCount,
  };
}