const discord = require('discord.js');
const bot = new discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('online')
    bot.user.setActivity('SBT Lounge', {type: 'Watching'})

});
bot.login(process.env.BOT_TOKEN);
