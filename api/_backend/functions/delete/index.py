# api/functions/delete/index.py
from auth.client import twitter

def delete_tweet(id):

  deleted_tweet = []
  
  response = twitter.delete_tweet(id)
  print(f"Tweet with ID {id} has been deleted successfully!")

  deleted_tweet.append(response.data)
  
  return deleted_tweet
    