from auth.client import twitter

def get_users(user_ids):
    response = twitter.get_users(ids=user_ids,
                                 user_fields=["description"],
                                 tweet_fields=["text"],
                                 expansions="pinned_tweet_id")

    user = response.data[0]

    if "tweets" in response.includes:
        user_info = {
            "id": user.id,
            "username": user.username,
            "name": user.name,
            "description": user.description,
            "tweet_text": response.includes["tweets"][0].text
        }
    else:
        user_info = {
            "id": user.id,
            "username": user.username,
            "name": user.name,
            "description": user.description,
            "tweet_text": None
        }



    print(user)
    return user_info
get_users(1768102011474784370)