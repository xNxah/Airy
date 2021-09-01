const Discord = require('discord.js');

require('dotenv').config();

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

  client.on("ready", () => {
client.user.setActivity(`AIRES | -help`, { type: 'WATCHING' })
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
    });

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})



client.login(process.env.DISCORD_TOKEN);
