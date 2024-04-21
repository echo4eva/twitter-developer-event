# access_blocked_users.py

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