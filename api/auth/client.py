# api/auth/client.py
import tweepy
from dotenv import load_dotenv
import os

load_dotenv()

oauth2_user_handler = tweepy.OAuth2UserHandler(
    client_id=os.getenv("TWITTER_CLIENT_ID"),
    redirect_uri=os.getenv("TWITTER_REDIRECT_URI"),
    scope=os.getenv("TWITTER_SCOPES").split(","),
    client_secret=os.getenv("TWITTER_CLIENT_SECRET")
)