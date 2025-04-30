const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config(); // Carregar variáveis do .env

// Pega o token do bot do arquivo .env
const token = process.env.TELEGRAM_TOKEN;
console.log("Token carregado:", token);
// Criação do bot com polling
const bot = new TelegramBot(token, { polling: true });

// Comando básico de início
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Olá, fã da FURIA! Estou aqui para te ajudar a acompanhar o time."
  );
});

// Quando o bot estiver online, o console mostrará
bot.on("polling_error", (error) => {
  console.log(error.code); // Erros de polling
});
