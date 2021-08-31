const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'help',
    description: "Shows some information about Airy.",
    permissions: ["READ_MESSAGE_HISTORY"],
    execute(client, message, args){

        const EmbedHelp = new MessageEmbed()
        .setTitle('Heyy!')
        .setColor('#FFFFFF')
        .setDescription("I'm Airy. I'm the official airesTech bot. And I got my eyes on y'all :eyes: If you're trying to find my commands, well bad news. I don't really have any at the current moment, but there will be added many commands later on! :)")
        .setFooter('Airy scripted by @imNoah', 'https://media.discordapp.net/attachments/812422336421560400/876047455207174194/airy.jpg?width=663&height=663')

        message.reply({ embeds: [EmbedHelp]})
    }
}