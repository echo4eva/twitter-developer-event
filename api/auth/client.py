# api/auth/client.py
import tweepy

# mine
consumer_key = "gOqhSlhelvEx5qPxNAfqL3eQK"
consumer_secret = "gJTAMFUDIGVLnKKNjqD49R1UWIz5cchQxJwvmdtv8lPOwZFVu7"
access_token = "1523879686178107392-BOrWtDLInvGPP6fafRgbNojyH7OHcY"
access_token_secret = "SYamuitmqnGs4Ksogpd51o8XqxCilhmchZS5g6IwNaRFI"

# consumer_key = "HmJIAPUcktqGNvZR1aEHDYbQP"
# consumer_secret = "LSBRXX9xTswuLVDiYZZ1a2NPom4pYJQHzM9sSGxpXX6hfKmfvA"
# access_token = "1184909120685539328-jBoOliBcN8PihZvpb4C27ZsbpiB4If"
# access_token_secret = "a24IKr6R3YmI3NI0z5VVQFdaHKScciwpxwHMu5E3ROQMs"
bearer_token = "AAAAAAAAAAAAAAAAAAAAAAWCtQEAAAAAAMtG4rgJwtj5OLrkez6sDXB9sEg%3DuITcr4gwiiDLKvFk1tGZrvv3Bkb2kSHOtG655uulY88Ye6DcQg"

twitter = tweepy.Client(consumer_key=consumer_key,
                        consumer_secret=consumer_secret,
                        access_token=access_token,
                        access_token_secret=access_token_secret,
                        bearer_token=bearer_token)
