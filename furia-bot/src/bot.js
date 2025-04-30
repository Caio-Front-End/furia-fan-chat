const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config(); // Carregar variáveis do .env

// Pega o token do bot do arquivo .env
const token = process.env.TELEGRAM_TOKEN;
console.log("Token carregado:", token);

// Criação do bot com polling
const bot = new TelegramBot(token, { polling: true });

// Mensagem de boas-vindas ao iniciar o bot
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `👋 Olá, fã da FURIA!

Sou seu assistente para acompanhar o time de perto.
Aqui estão os comandos que você pode usar:

🗓️ /proximojogo - Veja quando será o próximo confronto
🧑‍🤝‍🧑 /elenco - Conheça o elenco atual
📊 /ranking - Acompanhe a posição da FURIA nos campeonatos
🛍️ /loja - Acesse os produtos oficiais
📰 /noticias - Últimas notícias do time
ℹ️ /ajuda - Saiba como usar o bot

#SomosFURIA 🖤`
  );
});

// /ajuda - Guia de uso
bot.onText(/\/ajuda/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `ℹ️ Este bot foi criado para manter os fãs da FURIA atualizados e conectados com o time.

👉 Use os comandos a qualquer momento para acessar informações.

Se tiver sugestões, mande para a equipe! 🖤

#SomosFURIA`
  );
});

// /proximojogo
bot.onText(/\/proximojogo/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "🗓️ O próximo jogo da FURIA será contra a NAVI no dia 03/05 às 16h."
  );
});

// /elenco
bot.onText(/\/elenco/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `👥 Elenco atual da FURIA (CS2):
- FalleN (IGL)
- KSCERATO
- yuurih
- chelo
- arT`
  );
});

// /ranking
bot.onText(/\/ranking/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "📊 A FURIA está atualmente na 9ª colocação no ranking mundial da HLTV."
  );
});

// /loja
bot.onText(/\/loja/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "🛍️ Acesse a loja oficial da FURIA: https://www.furia.gg/store"
  );
});

// /noticias
bot.onText(/\/noticias/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `
📰 Últimas notícias da FURIA:

1. FURIA vence a Imperial por 2x1 e avança no campeonato.
2. FalleN comenta sobre o desempenho do time após vitória.
3. Novos uniformes da FURIA são lançados em parceria com a Nike.

Acompanhe tudo em: https://www.furia.gg/news
  `
  );
});

// Exibir erros de polling, se ocorrerem
bot.on("polling_error", (error) => {
  console.log("Erro de polling:", error.code);
});
