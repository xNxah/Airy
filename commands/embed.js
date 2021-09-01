const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'embed',
    description: "embed",
    permissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    execute(client, message, args){ 
        let channel = message.mentions.channels.first().id;
        let color = args[1];
        let title = args[2]; 
        let image = args[3];
        let desc = args.slice(4).join(" ");
        if(!args[4]) return message.reply('no argument');
        const Embed =  new MessageEmbed()
        .setColor(color)
        .setTitle(title)
        .setImage(image)
        .setDescription(desc);
message.reply('Sending now.. :point_right:')
message.guild.channels.cache.get(channel).send({ embeds: [Embed]})
}}