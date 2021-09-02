const noblox = require('noblox.js');
const {MessageEmbed} = require('discord.js')
const groupId = 'ID'
module.exports = {
    name: 'promote',
    description: "promotes (obviously)",
    permissions: ["ADMINISTRATOR"], 
    execute(client, message, args){ 
const failembed = new MessageEmbed()
        .setTitle(`Promotion Unsuccessful`)
        .setColor('#11064b')
      .setDescription(`Cannot promote ${person}, this is not a ROBLOX username.`)
        .setFooter('Airy scripted by <@543447797270052864>', 'https://media.discordapp.net/attachments/812422336421560400/876047455207174194/airy.jpg?width=663&height=663'
 let person = args[1]; 
  rbx.getIdFromUsername(person).catch(err => {
            return msg.reply(failembed);
          });
          rbx.getIdFromUsername(person).then(id => {
            // gets user id for the specific part of the embed you'll need it for.
   if (id) {
   const oldRank = await noblox.getRankNameInGroup(groupID, id)
                        noblox.promote(groupID, id)
                            .then(async (success) => {

                                const rankname = await noblox.getRankNameInGroup(groupID, id)
                                const user = message.author
 const Embed = new MessageEmbed()
        .setTitle(`Promotion Successful`)
        .setColor('#11064b')
      .setDescription(`${user} has promoted ${person} from ${oldRank} to ${rankname}.`)
        .setFooter('Airy scripted by <@543447797270052864>', 'https://media.discordapp.net/attachments/812422336421560400/876047455207174194/airy.jpg?width=663&height=663')

        message.reply({ embeds: [Embed]})
