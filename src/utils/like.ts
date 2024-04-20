import { twitterClient } from './twitterClient';

export async function like(hashtag: string): Promise<void> {
  try {
    const tweets = await twitterClient.bearer.search(hashtag);
    for (const tweet of tweets) {
      await twitterClient.v2.like(process.env.APP_ID!, tweet.id);
      console.log(`Liked tweet: ${tweet.id}`);
    }
  } catch (err) {
    console.error(err);
  }
}