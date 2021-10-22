const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'productembed',
    description: "embed",
    permissions: ["ADMINISTRATOR"],
    execute(client, message, args){ 
        const embed =  new MessageEmbed()
        .setColor('11064b')
        .setTitle('Hunters Quay Port')
        .setDescription(`**RESELL FROM EUROHUB**
        
An amazing island port originally made by euroHUB, and edited by airesTech. `)
        .setImage('https://media.discordapp.net/attachments/883971050935820298/901199408534806558/unknown.png?width=1306&height=662')
message.channel.send({ embeds: [embed]})
}}
