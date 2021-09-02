const {MessageEmbed, Guild} = require('discord.js')

module.exports = {
    name: 'membercount',
    description: "Show's how many members are in the server. ",
    permissions: ["READ_MESSAGE_HISTORY"],
    execute(client, message, args){

        const Embed = new MessageEmbed()
        .setTitle('Membercount')
        .setColor('#11064b')
        .setDescription(`There are currently **${message.member.guild.memberCount}** members in airesTech.`)

        message.reply({ embeds: [Embed]})
    }
}