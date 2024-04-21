from auth.client import twitter

def get_followers(user_id):

  response = twitter.get_users_followers(id=user_id, max_results=20)
  print(response)

  return response.data