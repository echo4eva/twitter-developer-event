# api/app.py
from flask import Flask, send_file, jsonify
from functions.blocked.index import get_blocked_users
from functions.followers.index import get_followers
from functions.block.index import block_users
from functions.delete.index import delete_tweet
from functions.get_users.index import get_users
import os

app = Flask(__name__)

@app.route('/')
def index():
  return 'Hello, World!'

# maybe try <term> = "grok"? test cuz spammed before
# <user> = twitter @ or id? idk
@app.route('/search/<user>/<term>')

@app.route("/followers/<user_id>")
def see_followers(user_id):
  response = get_followers(user_id)
  return response

# 1781848699141767676, deleted
# "you are unauth to delete this tweet"
# changed keys to mine, works: **tokens + client id same acc**
# 1781848551867236805, deleted
@app.route("/delete_tweet/<tweet_id>")
def delete_tweets(tweet_id):
  response = delete_tweet(tweet_id)
  return response

@app.route("/user/<user_id>")
def get_user(user_id):
  response = get_users(user_id)
  return response

@app.route('/blocked_users')
def download_blocked_users():
  """
    Endpoint to download the list of blocked users as a JSON file.

    Returns:
        A downloadable JSON file containing the list of blocked users.
    """
  blocked_users_json = get_blocked_users()
  file_path = 'blocked_users.json'

  # Save the JSON data to a file
  with open(file_path, 'w') as f:
    f.write(blocked_users_json)

  # Return the file as a downloadable response
  return send_file(file_path,
                   as_attachment=True,
                   download_name='blocked_users.json')


if __name__ == '__main__':
  app.run(debug=True)
