from auth.client import twitter
import time

# Cache to store previously posted tweets
tweet_cache = []

def create_tweet(message):
    # Check if the message is a duplicate of a previously posted tweet
    if message in tweet_cache:
        print(f"Skipping duplicate tweet: {message}")
        return None

    try:
        response = twitter.create_tweet(text=message)
        # Add the new tweet to the cache
        tweet_cache.append(message)
        return response
    except tweepy.errors.Forbidden as e:
        if "duplicate content" in str(e):
            print(f"Error: Duplicate tweet detected. Skipping: {message}")
            return None
        else:
            print(f"Error creating tweet: {e}")
            return None
    except Exception as e:
        print(f"Error creating tweet: {e}")
        return None