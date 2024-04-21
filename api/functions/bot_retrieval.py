def get_bot_user_ids(file_path):
    bot_user_ids = []

    with open(file_path, 'r') as file:
        for line in file:
            user_id, classification = line.strip().split(',')
            if classification == 'bot':
                bot_user_ids.append(user_id[1:])  

    return bot_user_ids


data_file_path = 'twibot-22.csv'


bot_ids = get_bot_user_ids(data_file_path)


print(bot_ids)