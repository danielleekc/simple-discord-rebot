require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

// token from discord application -> bot
const token = process.env.TOKEN;

// bot events
bot.on('ready', ()=>{
    console.info(`Logged in as ${bot.user.tag}!`);
})

bot.on('message', msg =>{
    if(msg.content === 'hey bot'){
        msg.reply('Hello?');
        msg.channel.send(`Hello ${msg.author}!`);
    }
})

bot.login(token);
