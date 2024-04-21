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



    
    return user_info


def get_bot_data(bot_user_ids):
    descriptions = []
    tweet_texts = []

    for user_id in bot_user_ids:
        user_info = get_users([user_id])
        descriptions.append(user_info["description"])
        tweet_texts.append(user_info["tweet_text"])

    return descriptions, tweet_texts