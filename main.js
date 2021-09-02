const Discord = require('discord.js');
const noblox = require('noblox.js');

require('dotenv').config();

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

async function startApp () {
    const currentUser = await noblox.setCookie(process.env.ROBLOSEC) 
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
}
client.on("ready", () => {
client.user.setActivity(`AIRES | -help`, { type: 'WATCHING' })
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
 noblox.getCurrentUser().then(currentuser => {
        if(!currentuser)
    console.warn("You forgot to add a cookie.")
    else
    console.log(`Logged on Discord: ${bot.user.tag} \nCurrent Roblox user: ${currentuser.UserName} \nCurrent userId: ${currentuser.UserID}`)})
        .catch(console.error);
    });



['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})



client.login(process.env.DISCORD_TOKEN);
