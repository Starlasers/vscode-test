const Discord = require('discord.js');
const client = new Discord.Client();






client.on('ready', () => {
  client.user.setActivity('Orangius Empire')
});


client.on('message', message => {
  
  if (message.content === 'test') {
    
    message.channel.send('work');
  }
});





client.login('NjQ3OTU0OTQwMTY1MjI2NTA3.XdnNEA._w61FX4mM_n3JRVSnlw2jUMGYCw');