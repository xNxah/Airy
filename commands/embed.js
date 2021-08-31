const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'embed',
    description: "Custom embed",
    permissions: ["READ_MESSAGE_HISTORY"],
    execute(client, message, args){

        const Embed = new MessageEmbed()
        .setTitle('Roles')
        .setColor('#FFFFFF')
        .setDescription(`To make pings minimal, we have designed a system allowing you to pick which notifications you would like to recieve. 

Announcements = :newspaper2: 
Development = :tools: 
Giveaways = :tada: 
Events = :medal: 

To assign any of the roles, please react below this message with the reaction matching the notification. `)
        .setImage('https://media.discordapp.net/attachments/881907696268374026/881910346879741952/airesRoles.jpg?width=1440&height=360')

        message.channel.send({ embeds: [Embed]});
    }
}