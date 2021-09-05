const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'productembed',
    description: "embed",
    permissions: ["ADMINISTRATOR"],
    execute(client, message, args){ 
        const embed =  new MessageEmbed()
        .setColor('11064b')
        .setTitle('airesCoffee')
        .setDescription(`A high quality model that can be placed anywhere you'd want, to give people some hot coffee. 

Price: 40 Robux
        `)
        .setImage('https://media.discordapp.net/attachments/881907696268374026/883412457350107196/unknown.png?width=1346&height=662')
message.channel.send({ embeds: [embed]})
}}