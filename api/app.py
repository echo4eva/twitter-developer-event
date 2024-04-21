# api/app.py
from flask import Flask, send_file, jsonify, request
from requests import post
from functions.blocked.index import get_blocked_users
from functions.followers.index import get_followers
from functions.block.index import block_users
from functions.delete.index import delete_tweet
from functions.get_users.index import get_users
from functions.post.index import create_tweet
import os

from events import message_received, message_sent

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


# WORKS! thanks Khalid!
@app.route("/user/<user_id>")
def get_user(user_id):
  """
  response: Dict(keys: "description", "name", "username", "id", "tweet_text",
                "followers", "following")
  """
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


# @app.route('/send-message', methods=['POST'])
# def send_message():
#   data = request.get_json()
#   message = data.get('message')

#   # Trigger the 'message-sent' event
#   message_sent.send(message)

#   return jsonify({'message': 'Message sent'}), 200

# @app.route('/send-message', methods=['POST'])
# def send_message():
#   data = request.get_json()
#   message = data.get('message')

#   # Use the Tweepy client to send the message
#   try:
#       response = create_tweet(message)
#       message_id = response.data.id
#   except tweepy.TweepyException as e:
#       return jsonify({'error': str(e)}), 500


@app.route('/receive-message', methods=['POST'])
def receive_message():
  data = request.get_json()
  message = data.get('message')

  # Trigger the 'message-received' event
  message_received.send(message)

  return jsonify({'message': 'Message received'}), 200


if __name__ == '__main__':
  app.run(debug=True)
