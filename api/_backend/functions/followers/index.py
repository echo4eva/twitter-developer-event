from auth.client import twitter
import json


def get_followers(user_id):

  followers = []

  response = twitter.get_users_followers(id=user_id, max_results=20)

  for user in response.data:
    followers.append({
        "id": user.id,
        "username": user.username,
        "name": user.name,
        "description": user.description
    })

  return followers
