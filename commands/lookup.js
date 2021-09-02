const noblox = require('noblox.js');
const {MessageEmbed} = require('discord.js')
const groupId = '11938979'
module.exports = {
    name: 'lookup',
    description: "finds cool person (obviously)",
    permissions: ["READ_MESSAGE_HISTORY"],
    execute(client, message, args){ 
 let person = args[0]; 
  noblox.getIdFromUsername(person).catch(err => {
            return msg.reply(
              "sorry, that user doesn't seem to exist on ROBLOX."
            );
          });
          noblox.getIdFromUsername(person).then(id => {
          
   if (id) {
const rankName = noblox.getRankNameInGroup(groupId, id)
if (rankName == "") {
  rankName = "None";
}
let blurb = noblox.getBlurb({userId: id})
if (blurb == "") {
  blurb = "None";
}
 const EmbedHelp = new MessageEmbed()
        .setTitle(`Account information for ${person}`)
        .setColor('#11064b')
        .addField('Group Name', 'Aires', false)
        .addField('Group Rank', rankName, false)
        .addField('Blurb', blurb, false)
        .setFooter('Airy scripted by <@543447797270052864>', 'https://media.discordapp.net/attachments/812422336421560400/876047455207174194/airy.jpg?width=663&height=663')

        message.reply({ embeds: [EmbedHelp]})
      }
    })
  }
}