# api/functions/blocked/index.py
from auth.client import twitter

def get_blocked_users():
  response = twitter.get_blocked()

  blocked_users = []

  # list[each element is a dict]
  for user in response.data:
      blocked_users.append({
          "id": user.id,
          "username": user.username,
          "name": user.name
      })

  next_token = response.meta.get('next_token')

  # gets other page of blocked users
  while next_token:
      response = twitter.get_blocked(pagination_token=next_token)
      for user in response.data:
          blocked_users.append({
              "id": user.id,
              "username": user.username,
              "name": user.name
          })
        
      next_token = response.meta.get('next_token')

  return blocked_users