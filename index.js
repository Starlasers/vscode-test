const Discord = require('discord.js');
const client = new Discord.Client();






client.on('ready', () => {
  client.user.setActivity('Orangius Empire')
});


client.on('message', message => {
  
  if (message.content === 'test') {
    
    message.channel.send('test');
  }
});





client.login
