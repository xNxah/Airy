const noblox = require('noblox.js');
const {MessageEmbed} = require('discord.js')
const groupId = 'ID'
module.exports = {
    name: 'demote',
    description: "demotes (obviously)",
    permissions: ["READ_MESSAGE_HISTORY"], // CHANGE THIS OR UR FUCKED
    execute(client, message, args){ 
const failembed = new MessageEmbed()
        .setTitle(`Demotion Unsuccessful`)
        .setColor('#11064b')
      .setDescription(`Cannot demote ${person}, this is not a ROBLOX username.`)
        .setFooter('Airy scripted by <@543447797270052864>', 'https://media.discordapp.net/attachments/812422336421560400/876047455207174194/airy.jpg?width=663&height=663')
 let person = args[1]; 
  rbx.getIdFromUsername(person).catch(err => {
            return msg.reply(failembed);
          });
          rbx.getIdFromUsername(person).then(id => {
            // gets user id for the specific part of the embed you'll need it for.
   if (id) {
   const oldRank = await noblox.getRankNameInGroup(groupID, id)
                        noblox.demote(groupID, id)
                            .then(async (success) => {

                                const rankname = await noblox.getRankNameInGroup(groupID, id)
                                const user = message.author
 const Embed = new MessageEmbed()
        .setTitle(`Demotion Successful`)
        .setColor('#11064b')
      .setDescription(`${user} has demoted ${person} from ${oldRank} to ${rankname}.`)
        .setFooter('Airy scripted by <@543447797270052864>', 'https://media.discordapp.net/attachments/812422336421560400/876047455207174194/airy.jpg?width=663&height=663')

        message.reply({ embeds: [Embed]})
        })
      }
    })
  }
}