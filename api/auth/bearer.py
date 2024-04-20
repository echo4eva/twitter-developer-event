# api/auth/bearer.py
import tweepy
from dotenv import load_dotenv
import os

load_dotenv()

auth = tweepy.OAuth2AppHandler(
    os.getenv("TWITTER_API_KEY"),
    os.getenv("TWITTER_API_SECRET")
)
api = tweepy.API(auth)