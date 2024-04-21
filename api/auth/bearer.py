# api/auth/bearer.py
# needs corrections?
# needed dont touch
import tweepy
from dotenv import load_dotenv
import os

def get_twitter_api():
  """
  Returns a Tweepy API object authenticated with the Twitter API keys.
  """
  load_dotenv()
  auth = tweepy.OAuth2AppHandler(
      os.getenv("TWITTER_API_KEY"),
      os.getenv("TWITTER_API_SECRET")
  )
  api = tweepy.API(auth)
  return api