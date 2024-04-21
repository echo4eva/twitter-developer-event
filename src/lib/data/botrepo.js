// src/lib/data/database.ts

import sqlite3 from 'sqlite3';
import { Bot } from './bot_types';

const db = new sqlite3.Database('bot_database.db');

export function createDatabase() {
  return new Promise((resolve, reject) => {
    db.run(`
      CREATE TABLE IF NOT EXISTS bots (
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
      )
    `, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export function insertBot(bot: Bot) {
  return new Promise((resolve, reject) => {
    db.run(`
      INSERT INTO bots (
        bot, idea, sequence, intro_message, info_message, description,
        feature_1, feature_2, feature_3, twitter_handle, rating, tags,
        href, image, author
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      bot.bot, bot.idea, bot.sequence, bot["intro message"], bot["info message"],
      bot.description, bot["feature_1"], bot["feature_2"], bot["feature_3"],
      bot.twitter_handle, bot.rating, bot.tags, bot.href, bot.image, bot.author
    ], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export function getAllBots() {
  return new Promise<Bot[]>((resolve, reject) => {
    db.all(`SELECT * FROM bots`, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows as Bot[]);
      }
    });
  });
}