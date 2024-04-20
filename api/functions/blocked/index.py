# api/functions/blocked/index.py
import requests

def get_blocked_users(user_id, access_token, max_results=100, pagination_token=None, user_fields=None, tweet_fields=None, expansions=None, **props):
    """
    Retrieves a list of users who are blocked by the specified user ID.

    Args:
        user_id (str): The user ID whose blocked users you would like to retrieve.
        access_token (str): The access token for the Twitter API.
        max_results (int, optional): The maximum number of results to be returned per page. Defaults to 100.
        pagination_token (str, optional): Used to request the next page of results.
        user_fields (str, optional): A comma-separated list of user fields to include in the response.
        tweet_fields (str, optional): A comma-separated list of tweet fields to include in the response.
        expansions (str, optional): A comma-separated list of expansions to include in the response.
        **props (dict): Additional props passed from the parent component.

    Returns:
        dict: The response from the Twitter API.
    """
    url = f"https://api.twitter.com/2/users/{user_id}/blocking"
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    params = {
        "max_results": max_results,
        "pagination_token": pagination_token,
        "user.fields": user_fields,
        "tweet.fields": tweet_fields,
        "expansions": expansions
    }

    response = requests.get(url, headers=headers, params=params)
    response.raise_for_status()
    return response.json()