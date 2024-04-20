// src/utils/retweet.ts
import { twitterClient } from './twitterClient';

export async function retweet(hashtag: string): Promise<void> {
  try {
    const tweets = await twitterClient.bearer.search(hashtag);
    const firstTweetId = tweets[0].id;
    await twitterClient.v2.retweet(process.env.APP_ID!, firstTweetId);
    console.log(`Retweeted tweet: ${firstTweetId}`);
  } catch (err) {
    console.error(err);
  }
}