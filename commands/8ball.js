const {MessageEmbed} = require('discord.js')

module.exports = {
    name: '8ball',
    description: "Picks a random answer to a question. ",
    permissions: ["READ_MESSAGE_HISTORY"],
    execute(client, message, args){

        const messages = ["Yes", "No", "Probably", "Maybe", "I don't know", "Lmao what no lol", "Repeat?", "Makes no sense for me-", "zZzZzZzz oh what did you say?", "I can't tell right now"]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        const EmbedHelp = new MessageEmbed()
        .setTitle('The magic 8ball got an answer!')
        .setColor('#FFFFFF')
        .setDescription(`${randomMessage}`)

        message.reply({ embeds: [EmbedHelp]})
    }
}