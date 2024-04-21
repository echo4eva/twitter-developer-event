from auth.client import twitter

def delete_tweet(id):
  twitter.delete_tweet(id)
  