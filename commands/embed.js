const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'embed',
    description: "embed",
    permissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    execute(client, message, args){ 
        let channel = args[1]
        let color = args[2];
        let title = args[3]; 
        let image = args[4];
        let desc = args.slice(5).join(" ");
        if(!args[5]) return message.reply('no argument');
        const Embed =  new MessageEmbed()
        .setColor(color)
        .setTitle(title)
        .setImage(image)
        .setDescription(desc);
message.reply('Sending now.. :point_right:')
message.guild.channels.cache.get(channel.id).send({ embeds: [Embed]})
}}