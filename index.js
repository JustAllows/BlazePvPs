const http = require('http');
const express = require('express');
const app = express();
const { Client, Util } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');

const client = new Client({ disableEveryone: true });

client.on('warn', console.warn);

client.on('error', console.error);

client.on("ready", () => {
   client.user.setStatus(`online`);
    client.user.setActivity(`play.BlazePvPs.net`);
  console.log("Ready");
});

client.on('disconnect', () => console.log('Left...'));

client.on('reconnecting', () => console.log('Reconnecting...'));

client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) return undefined;


	let message = msg.content.toLowerCase().split(' ')[0];
	message = message.slice(PREFIX.length)

  if (message === 'ip') {
    return msg.channel.send("**IP ADDRESS**\n\nplay.BlazePvPs.net\nmc.BlazePvPs.net\nBlazePvPs.net")
  }
  if (message === 'info') {
    return msg.channel.send("**INFORMATION**\n\nComing soon...")
  }
  if (message === 'nigga') {
      return msg.channel.send("!play https://www.youtube.com/watch?v=pAaXzHJhA18")
}
	return undefined;    
});
client.login(TOKEN);
 