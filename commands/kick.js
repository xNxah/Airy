const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'kick',
    description: "Kick's the mentioned user from the server. ",
    permissions: ["ADMINISTRATOR", "KICK_MEMBERS"],
    execute(client, message, args){

        const EmbedKick = new MessageEmbed()
        .setColor('#11064b')
        .setDescription("The user has been kicked. ")

        const EmbedFailKick = new MessageEmbed()
        .setColor('#11064b')
        .setDescription("The user you tried to kick is not in the server.")
        
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.reply({ embeds: [EmbedKick]})
        } else{
            message.reply({ embeds: [EmbedFailKick]})
        }
    }
}