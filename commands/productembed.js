const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'productembed',
    description: "embed",
    permissions: ["ADMINISTRATOR"],
    execute(client, message, args){ 
        const embed =  new MessageEmbed()
        .setColor('11064b')
        .setTitle('SCIv2')
        .setDescription(`Definitely the best and most affordable Self Check-in on the roblox market. 
Features:
Enable/Disable feature - Run **!enablesci** or **!disablesci** in the chat to enable or disable. 
Flight Information - Tell your passengers some information about your flight in the admin panel!
Seat Count - Let your passengers know how many seats are left. 
Everything Tweened - Every UI is tweened, allowing smoothness for your passengers. 
Automatic Setup - Tired of spending time setting stuff up? Only change 4 texts in a setup script and you're good to go. 
Modern & Simple model. 
        `)
        .setImage('https://media.discordapp.net/attachments/869579144470626374/892086507748327504/unknown.png?width=850&height=432')
message.channel.send({ embeds: [embed]})
}}
