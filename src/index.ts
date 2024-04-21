// index.ts

import { createDatabase, insertBot, getAllBots } from './lib/data/databaserver.js';
import { Bot } from './lib/data/bot_types';

async function main() {
  try {
    await createDatabase();
    console.log('Database created successfully.');

    const bot: Bot = {
      bot: 'Bot1',
      idea: 'Idea1',
      sequence: 'Sequence1',
      "intro message": 'Intro Message1',
      "info message": 'Info Message1',
      description: 'Description1',
      "feature_1": 'Feature 1',
      "feature_2": 'Feature 2',
      "feature_3": 'Feature 3',
      twitter_handle: '@bot1',
      rating: 4.5,
      tags: 'tag1,tag2',
      href: 'https://bot1.com',
      image: 'bot1.jpg',
      author: 'Author1'
    };

    await insertBot(bot);
    console.log('Bot inserted successfully.');

    const bots = await getAllBots();
    console.log('All bots:', bots);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();