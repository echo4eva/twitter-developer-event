from lib.data.database import create_database, insert_bot, get_all_bots

def main():
    create_database()
    print("Database created successfully.")

    bot = {
        'bot': 'Bot1',
        'idea': 'Idea1',
        'sequence': 'Sequence1',
        'intro message': 'Intro Message1',
        'info message': 'Info Message1',
        'description': 'Description1',
        'feature_1': 'Feature 1',
        'feature_2': 'Feature 2',
        'feature_3': 'Feature 3',
        'twitter_handle': '@bot1',
        'rating': 4.5,
        'tags': 'tag1,tag2',
        'href': 'https://bot1.com',
        'image': 'bot1.jpg',
        'author': 'Author1'
    }

    insert_bot(bot)
    print("Bot inserted successfully.")

    bots = get_all_bots()
    print("All bots:")
    for bot in bots:
        print(bot)

if __name__ == '__main__':
    main()