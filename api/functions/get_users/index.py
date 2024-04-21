from auth.client import twitter


def get_users(user_ids):

  response = twitter.get_users(ids=user_ids,
                               user_fields=["description"],
                               tweet_fields=["text"],
                               expansions="pinned_tweet_id")

  user = response.data[0]

  # if response.includes:
  user_info = {
      "id": user.id,
      "username": user.username,
      "name": user.name,
      "description": user.description,
      "tweet_text": response["includes"]["tweets"][0]["text"]
  }
  # else:
  #   user_info = {
  #       "id": user.id,
  #       "username": user.username,
  #       "name": user.name,
  #       "description": user.description,
  #       # "tweet_text": user.tweet.text
  #   }

  print(user)

  return user_info

"""
{
    "data": {
        "pinned_tweet_id": "1768102011474784370",
        "username": "echo4eva",
        "name": "echo4eva",
        "id": "1523879686178107392",
        "description": "programmer | noob deep learner | 10x gamer | library & viet coffee enjoyer | he/him | dms open!"
    },
    "includes": {
        "tweets": [
            {
                "edit_history_tweet_ids": [
                    "1768102011474784370"
                ],
                "id": "1768102011474784370",
                "text": "can't get a tech job in 2024? skill issue? not me 😼😼😼 https://t.co/R6jaGDpwf2"
            }
        ]
    }
}
"""