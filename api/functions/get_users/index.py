from auth.client import twitter


def get_users(user_ids):
  response = twitter.get_users(ids=user_ids,
                               user_fields=["description", "public_metrics"],
                               tweet_fields=["text"],
                               expansions="pinned_tweet_id")

  user = response.data[0]

  if "tweets" in response.includes:
    user_info = {
        "id": user.id,
        "username": user.username,
        "name": user.name,
        "description": user.description,
        # WOOOORKS!
        "tweet_text": response.includes["tweets"][0].text,
        "followers": user.public_metrics["followers_count"],
        "following": user.public_metrics["following_count"]
    }
  else:
    user_info = {
        "id": user.id,
        "username": user.username,
        "name": user.name,
        "description": user.description,
        "tweet_text": None,
        "followers": user.public_metrics["followers_count"],
        "following": user.public_metrics["following_count"]
    }

  return user_info
