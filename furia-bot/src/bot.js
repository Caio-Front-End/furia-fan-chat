const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config(); // Carregar variáveis do .env

// Pega o token do bot do arquivo .env
const token = process.env.TELEGRAM_TOKEN;
console.log(token);

// Criação do bot com polling
const bot = new TelegramBot(token, { polling: true });

// Comando básico de início
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "🎮 Olá, fã da FURIA! 🦁\n\nSeja bem-vindo ao nosso bot! Eu estou aqui para te ajudar a acompanhar tudo sobre o time de Counter-Strike 2. Escolha uma das opções abaixo para ficar por dentro de tudo! 🔥\n\n" +
      "Comandos disponíveis:\n" +
      "/proximoJogo - Verifique o próximo jogo da FURIA 🎮\n" +
      "/elenco - Saiba quem são os jogadores da FURIA 🧑‍💻👩‍💻\n" +
      "/ranking - Confira o ranking atual da FURIA 🏆\n" +
      "/loja - Acesse a loja da FURIA para comprar seus produtos oficiais 👕🛒\n" +
      "/ajuda - Ajuda sobre os comandos do bot 📖"
  );
});

// Comando de ajuda
bot.onText(/\/ajuda/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "🆘 *Como posso te ajudar?*\n\n" +
      "Eu sou um bot da FURIA, criado para te manter atualizado sobre o time de Counter-Strike 2! Aqui estão as opções disponíveis:\n\n" +
      "*/proximoJogo* - Mostra o próximo jogo da FURIA no CS2!\n" +
      "*/elenco* - Conheça os jogadores da FURIA, nossa linha de frente no CS2!\n" +
      "*/ranking* - Veja o ranking atual da FURIA no campeonato de CS2!\n" +
      "*/loja* - Vá para a loja oficial da FURIA e adquira produtos do time!\n" +
      "*/noticias* - Receba as últimas notícias sobre a FURIA no CS2! 📰🔥\n" +
      "Se precisar de algo mais, me avise! 🚀"
  );
});

// Comando para mostrar o próximo jogo
bot.onText(/\/proximoJogo/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "🎮 *Próximo jogo da FURIA no CS2!* 🦁\n\n" +
      "O próximo desafio da FURIA será contra o time XYZ. Não perca! 🔥\n\n" +
      "🗓️ Data: 30 de abril de 2025\n" +
      "⏰ Hora: 16:00 (Horário de Brasília)\n" +
      "📍 Local: Arena FURIA\n\n" +
      "Acompanhe o jogo e vamos torcer juntos! 🏆🔥"
  );
});

// Comando para mostrar o elenco
bot.onText(/\/elenco/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "🧑‍💻 *Elenco da FURIA - CS2* 👩‍💻\n\n" +
      "Conheça os jogadores da FURIA, que estão dominando as competições de CS2! 💥\n\n" +
      "🎮 *YEKINDAR* (Mareks Gaļinskis) - Rifler (Stand-in)\n" +
      "🎮 *molodoy* (Danil Golubenko) - Sniper\n" +
      "🎮 *yuurih* (Yuri Gomes dos Santos Boian) - Rifler\n" +
      "🎮 *KSCERATO* (Kaike Silva Cerato) - Rifler\n" +
      "🎮 *FalleN* (Gabriel Toledo de Alcântara Sguario) - IGL (In-Game Leader)\n\n" +
      "🧑‍🏫 *Técnico:* Sidnei 'sidde' Macedo\n" +
      "🎮 *Assistente Técnico:* Aydin 'krizzeN' Turlybekov (Kazakhstan)\n\n" +
      "Juntos, eles formam uma equipe imbatível! 💥"
  );
});

// Comando para mostrar o ranking
bot.onText(/\/ranking/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "🏆 *Ranking Atual da FURIA no CS2* 🔥\n\n" +
      "Veja como a FURIA está se saindo no campeonato de CS2!\n\n" +
      "1️⃣ FURIA - Posição 1\n" +
      "2️⃣ Time XYZ - Posição 2\n" +
      "3️⃣ Time ABC - Posição 3\n\n" +
      "Vamos continuar a luta pelo topo! 💪🦁"
  );
});

// Comando para acessar a loja
bot.onText(/\/loja/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "🛒 *Loja Oficial da FURIA* 🦁👕\n\n" +
      "Acesse a nossa loja e adquira produtos exclusivos da FURIA: camisetas, bonés, mochilas e muito mais! 👕🔥\n\n" +
      "Clique no link abaixo para acessar a loja:\n" +
      "🛍️ [Loja FURIA](http://www.loja.furia.gg)\n\n" +
      "Apoie o time com estilo! 💥"
  );
});

// Comando para mostrar as notícias
bot.onText(/\/noticias/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "📰 *Últimas Notícias da FURIA - CS2* 🔥\n\n" +
      "Acompanhe as últimas atualizações sobre a FURIA no CS2:\n\n" +
      "📢 *Notícia 1:* A FURIA venceu o time XYZ na última partida! 🏆\n" +
      "📢 *Notícia 2:* O jogador X foi eleito o melhor da partida! 👏\n\n" +
      "Fique ligado para mais atualizações! 🚀"
  );
});

// Quando o bot estiver online, o console mostrará
bot.on("polling_error", (error) => {
  console.log(error.code); // Erros de polling
});
