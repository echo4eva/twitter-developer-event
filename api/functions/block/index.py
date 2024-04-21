# api/functions/block/index.py
from auth.client import twitter
import tweepy


def block_users(user_ids):
    """
    Blocks the specified users.

    Args:
        user_ids (list): A list of user IDs to be blocked.

    Returns:
        list: A list of dictionaries, where each dictionary represents a blocked user.
    """
    blocked_users = []

    for user_id in user_ids:
        try:
            response = twitter.block(target_user_id=user_id)
            blocked_users.append({
                "id": response.data.id,
                "username": response.data.username,
                "name": response.data.name
            })
        except tweepy.errors.NotFound:
            print(f"User with ID {user_id} not found. Skipping.")
        except tweepy.TweepyException as e:
            print(f"Error blocking user {user_id}: {e}")

    return blocked_users