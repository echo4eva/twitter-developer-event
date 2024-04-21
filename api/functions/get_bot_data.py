from auth.client import twitter

def get_users(user_ids):
    users = twitter.lookup_users(user_ids=user_ids)
    user_info = []
    for user in users:
        info = {
            "id": user.id_str,
            "username": user.screen_name,
            "name": user.name,
            "description": user.description,
            "tweet_text": user.status.text if user.status else ""
        }
        user_info.append(info)
    return user_info

def get_bot_data(bot_user_ids):
    descriptions = []
    tweet_texts = []

    for user_id in bot_user_ids:
        user_info = get_users([user_id])
        if user_info:
            descriptions.append(user_info[0]["description"])
            tweet_texts.append(user_info[0]["tweet_text"])

    return descriptions, tweet_texts

def save_bot_user_ids(bot_user_ids, file_path):
    with open(file_path, "w") as file:
        file.write("\n".join(bot_user_ids))