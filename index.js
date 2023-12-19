const TelegramBot = require('node-telegram-bot-api');

const token = '5995675446:AAFWkfaggolblVQy4TU3syeXWhj2AXgAXew';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Check if the message is from a group
  if (msg.chat.type === 'group' || msg.chat.type === 'supergroup') {
    // Check for bad words and delete the message if found
    if (containsBadWords(messageText)) {
      bot.deleteMessage(chatId, msg.message_id).catch((error) => {
        console.error('Error deleting message:', error.message);
      });
    }
  }
});

function containsBadWords(message) {
  // Add your own logic to check for bad words
  const badWords = [
    'далбаёб',
    'дибил',
    'гандон',
    'гом',
    'мразь',
    'уёбок',
    'хуй',
    'наху',
    'ебу',
    'убать',
  ];
  const words = message.toLowerCase().split(/\s+/);
  return words.some((word) => badWords.includes(word));
}



