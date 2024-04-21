# cd twitter-developer-event/api
# python3 scrape.py
import csv

def get_bot_accounts(csv_file):
    bot_accounts = []

    try:
        with open(csv_file, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                if row['account_type'] == 'bot':
                    bot_accounts.append(row['id'])

    except FileNotFoundError:
        print(f"Error: {csv_file} not found.")
    except KeyError:
        print("Error: CSV file does not have 'id' and 'account_type' columns.")
    except Exception as e:
        print(f"Error: {e}")

    return bot_accounts

# Example usage
csv_file_path = 'twitter_human_bots_dataset.csv'
bot_accounts_list = get_bot_accounts(csv_file_path)
print(bot_accounts_list)