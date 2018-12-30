const discord = require('discord.js');
const bot = new discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('online')
    bot.user.setActivity('SBT Lounge', {type: 'Watching'})

});
bot.login("NTI4OTE2NDcyODUzMTY4MTI5.DwpPvw.Ayk-eRHFoG79jSgPf1QZOFe2N-E");
