import sqlite3

def create_database():
    conn = sqlite3.connect('bot_database.db')
    c = conn.cursor()

    c.execute('''CREATE TABLE IF NOT EXISTS bots (
                 bot TEXT,
                 idea TEXT,
                 sequence TEXT,
                 intro_message TEXT,
                 info_message TEXT,
                 description TEXT,
                 feature_1 TEXT,
                 feature_2 TEXT,
                 feature_3 TEXT,
                 twitter_handle TEXT,
                 rating REAL,
                 tags TEXT,
                 href TEXT,
                 image TEXT,
                 author TEXT
             )''')

    conn.commit()
    conn.close()

def insert_bot(bot):
    conn = sqlite3.connect('bot_database.db')
    c = conn.cursor()

    c.execute('''INSERT INTO bots (
                 bot, idea, sequence, intro_message, info_message, description,
                 feature_1, feature_2, feature_3, twitter_handle, rating, tags,
                 href, image, author
             ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''',
             (bot['bot'], bot['idea'], bot['sequence'], bot['intro message'], bot['info message'],
              bot['description'], bot['feature_1'], bot['feature_2'], bot['feature_3'],
              bot['twitter_handle'], bot['rating'], bot['tags'], bot['href'], bot['image'], bot['author']))

    conn.commit()
    conn.close()

def get_all_bots():
    conn = sqlite3.connect('bot_database.db')
    c = conn.cursor()

    c.execute('SELECT * FROM bots')
    bots = c.fetchall()

    conn.close()
    return bots