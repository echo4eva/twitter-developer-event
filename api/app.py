# api/app.py
from flask import Flask, send_file, jsonify
from functions.blocked.index import get_blocked_users
from functions.followers.index import get_followers
import os

app = Flask(__name__)


@app.route('/')
def index():
  return 'Hello, World!'


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

@app.route('/followers')
def followers():
  response = get_followers("44196397")
  print(response)
  return response

@app.route('/creds')
def creds():
  

if __name__ == '__main__':
  app.run(debug=True)
