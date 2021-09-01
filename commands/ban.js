const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'ban',
    description: "Ban's the mentioned user from the server. ",
    permissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    execute(client, message, args){

        const EmbedBan = new MessageEmbed()
        .setColor('#11064b')
        .setDescription("The user has been banned. ")

        const EmbedFailBan = new MessageEmbed()
        .setColor('#11064b')
        .setDescription("The user you tried to ban is not in the server.")
        
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.reply({ embeds: [EmbedBan]})
        } else{
            message.reply({ embeds: [EmbedFailBan]})
        }
    }
}