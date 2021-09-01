const {MessageEmbed, Guild} = require('discord.js')

module.exports = {
    name: 'membercount',
    description: "Show's how many members are in the server. ",
    permissions: ["READ_MESSAGE_HISTORY"],
    execute(client, message, args){

        var userCount = Guild.memberCount;

        const Embed = new MessageEmbed()
        .setColor('#11064b')
        .setDescription('There are currently **${userCount}** members in airesTech.')

        message.reply({ embeds: [Embed]})
    }
}