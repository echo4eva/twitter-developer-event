# main.py
from api.functions.blocked.index import get_blocked_users
from api.auth.client import oauth2_user_handler

# Authenticate the user and get the access token
try:
    # Redirect the user to the Twitter authorization page
    auth_url = oauth2_user_handler.get_authorization_url()
    print(f"Please visit this URL to authorize the app: {auth_url}")

    # Get the access token after the user authorizes the app
    verifier = input("Enter the verification code: ")
    access_token = oauth2_user_handler.get_access_token(verifier)
    print(f"Access token: {access_token}")

    # Use the access token to retrieve the blocked users
    blocked_users = get_blocked_users(oauth2_user_handler.get_user_id(), access_token)
    print(blocked_users)


except tweepy.TweepyException as e:
    print(f"Error: {e}")