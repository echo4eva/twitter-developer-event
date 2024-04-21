import tweepy
from auth.client import twitter
from functions.blocked.index import get_blocked_users
from functions.block.index import block_users
from typing import Any

# from functions.blocked.index import get_blocked_users
# import os
# from flask import Flask, send_file, jsonify

# app = Flask(__name__)

# @app.route('/blocked_users')
# def download_blocked_users():
#     """
#     Endpoint to download the list of blocked users as a JSON file.

#     Returns:
#         A downloadable JSON file containing the list of blocked users.
#     """
#     blocked_users_json = get_blocked_users()
#     file_path = 'blocked_users.json'

#     # Save the JSON data to a file
#     with open(file_path, 'w') as f:
#         f.write(blocked_users_json)

#     # Return the file as a downloadable response
#     return send_file(file_path, as_attachment=True, download_name='blocked_users.json')

# if __name__ == '__main__':
#   app.run(debug=True)

# def create_tweet(message: str) -> Any:
#   """
#     Creates a new tweet with the given message.

#     Args:
#         message (str): The text content of the tweet.

#     Returns:
#         Any: The response from the Twitter API.
#     """
#   response = twitter.create_tweet(text=message)
#   return response


# message: str = "grokaz!"
# response: Any = create_tweet(message)
# print("Tweeted: %s" % message)
# print(f"https://twitter.com/user/status/{response.data['id']}")
response = get_blocked_users()
import json

# Read the blocked_users.json file
with open('blocked_users.json', 'r') as file:
    blocked_users = json.load(file)

# Access and use the blocked_users data
for user in blocked_users:
    print(f"User ID: {user['id']}")
    print(f"Username: {user['username']}")
    print(f"Name: {user['name']}")
    print(f"Description: {user['description']}")
    print("---")
# response = block_users([""])
print(response)
