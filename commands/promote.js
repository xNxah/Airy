const noblox = require('noblox.js');
const {MessageEmbed} = require('discord.js')
const groupID = '11938979'

module.exports = {
  name: "promote",
  description: "Promotes a user in the roblox group. ",
  permissions: ["ADMINISTRATOR"],
  execute(client, message, args){
    const failEmbed = new MessageEmbed()
    .setTitle(`Promotion Unsuccessful`)
    .setColor('#11064b')
    .setDescription(`Cannot promote **${person}**, this is not a ROBLOX username.`)
    let person = args[1];
    rbx.getIdFromUser(person).catch(err => {
      return msg.reply(failEmbed);
    });
    rbx.getIdFromUser(person).then(id => {
      if (id) {
        const oldRank = await.noblox.getRankNameInGroup(groupID, id)
        noblox.promote(groupID, id)
        .then(async (sucess) => {
          const rankName = await noblox.getRankNameInGroup(groupID, id)
          const user = message.author
        })
      }
    })
    const SuccessEmbed = new MessageEmbed()
    .setTitle(`Promotion Successful`)
    .setColor('#11064b')
    .setDescription(`${user} has promoted ${person} from ${oldRank} to ${rankname}.`)

    message.reply({ embeds: [SuccessEmbed]})
  }
}