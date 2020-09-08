const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NzQ0MjYxMTQ3NjkxMTg4MzM1.XzgpNQ.Skhw9vQQDlKG4LivFc0YEQVJmUw);
