# api/functions/term_search_tweets/index.py
from auth.client import twitter

def search_tweets(username, keywords):
    searched_tweets = []

    # Get the user's timeline
    # doc -> needs user_id: str/int, max_results: int
    user_timeline = twitter.get_users_tweets(screen_name=username, count=200, tweet_mode='extended')

    # Filter the tweets based on the keywords
    for tweet in user_timeline:
        if any(keyword.lower() in tweet.full_text.lower() for keyword in keywords):
            searched_tweets.append(tweet)

    return searched_tweets