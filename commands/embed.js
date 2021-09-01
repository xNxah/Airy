const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'embed',
    description: "embed",
    permissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    execute(client, message, args){
let title = args[0]; 
  let desc = args.slice(1).join(" "); // try args.join(" ") - run console.log(desc) 
  let image = args[2];
 if(!args[1]) return message.reply('no argument');
 if(args[3]) return message.reply('Too many arguments')
 const Embed =  new MessageEmbed()
    .setColor("#ff1233")
    .setTitle(title)
    .setImage(image)
    .setDescription(desc);
message.reply('Sending now.. :point_right:');
message.channel.send({ embeds: [Embed]});
}}