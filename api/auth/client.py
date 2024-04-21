# api/auth/client.py
import tweepy

consumer_key = "gOqhSlhelvEx5qPxNAfqL3eQK"
consumer_secret = "gJTAMFUDIGVLnKKNjqD49R1UWIz5cchQxJwvmdtv8lPOwZFVu7"
access_token = "1523879686178107392-BOrWtDLInvGPP6fafRgbNojyH7OHcY"
access_token_secret = "SYamuitmqnGs4Ksogpd51o8XqxCilhmchZS5g6IwNaRFI"

twitter = tweepy.Client(
    consumer_key=consumer_key, consumer_secret=consumer_secret,
    access_token=access_token, access_token_secret=access_token_secret
)