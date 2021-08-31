const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'unban',
    description: "Unban's the mentioned user from the server. ",
    permissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    execute(client, message, args){

        let userID = args[0]

        const EmbedUnBan = new MessageEmbed()
        .setColor('#FFFFFF')
        .setDescription('The user has been unbanned. ')

        const EmbedFailUnBan = new MessageEmbed()
        .setColor('#FFFFFF')
        .setDescription("The user you tried to unban is invalid.")
        
        if(message.guild.fetchBans().userID){
            message.guild.members.unban(userID)
            message.reply({ embeds: [EmbedUnBan]});
        } else if(!message.guild.fetchBans().userID){
            message.reply({ embeds: [EmbedFailUnBan]});
        }
    }
}