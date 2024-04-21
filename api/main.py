import tweepy
from auth.client import twitter
from functions.blocked.index import get_blocked_users
from typing import Any

def create_tweet(message: str) -> Any:
    """
    Creates a new tweet with the given message.

    Args:
        message (str): The text content of the tweet.

    Returns:
        Any: The response from the Twitter API.
    """
    response = twitter.create_tweet(text=message)
    return response

# message: str = "grokaz!"
# response: Any = create_tweet(message)
# print("Tweeted: %s" % message)
# print(f"https://twitter.com/user/status/{response.data['id']}")
user_id = "1523879686178107392"
response = get_blocked_users(user_id, max_results=50, user_fields="name,username")
print(response)