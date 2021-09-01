const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'announce',
    description: "Announces a desired announcement.",
    permissions: ["MANAGE_CHANNELS"],
    execute(client, message, args){ 
        let channel = message.mentions.channels.first().id;
        let title = args[1]; 
        let desc = args.slice(2).join(" ");
        if(!args[2]) return message.reply("You didn't type anything to announce.");
        const Embed =  new MessageEmbed()
        .setColor('#11064b')
        .setTitle(title)
        .setDescription(desc)
        .setFooter('Announcement by ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true}));
message.reply('Succesfully announced!')
message.guild.channels.cache.get(channel).send({ embeds: [Embed]})
}}