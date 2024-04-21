from functions.blocked.index import get_blocked_users
from functions.followers.index import get_followers

# response = get_blocked_users()
response = get_followers("44196397")
print(response)