const noblox = require('noblox.js');
const {MessageEmbed} = require('discord.js')
const groupId = 'ID'
module.exports = {
    name: 'lookup',
    description: "finds cool person (obviously)",
    permissions: ["READ_MESSAGE_HISTORY"],
    execute(client, message, args){ 
 let person = args[1]; 
  rbx.getIdFromUsername(person).catch(err => {
            return msg.reply(
              "sorry, that user doesn't seem to exist on ROBLOX."
            );
          });
          rbx.getIdFromUsername(person).then(id => {
            // gets user id for the specific part of the embed you'll need it for.
   if (id) {
const rankName = await noblox.getRankNameInGroup(groupId, id)
let blurb = await noblox.getBlurb({userId: id})
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