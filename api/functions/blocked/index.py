# api/functions/blocked/index.py
from auth.client import twitter
import json


def get_blocked_users():
  """
      user_fields: List[str] - of blocked user details from blocked list
    """
  user_fields = ["description"]

  response = twitter.get_blocked(user_fields=user_fields)

  blocked_users = []

  # list[each element is a dict]
  for user in response.data:
    blocked_users.append({
        "id": user.id,
        "username": user.username,
        "name": user.name,
        "description": user.description
    })

  next_token = response.meta.get('next_token')

  # gets other page of blocked users
  while next_token:
    response = twitter.get_blocked(pagination_token=next_token,
                                   user_fields=user_fields)
    for user in response.data:
      blocked_users.append({
          "id": user.id,
          "username": user.username,
          "name": user.name,
          "description": user.description
      })

    next_token = response.meta.get('next_token')

  with open('blocked_users.json', 'w') as file:
    json.dump(blocked_users, file, indent=4)

# return json.dumps(blocked_users)
  return "json dump success"
