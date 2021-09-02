const noblox = require('noblox.js');
const {MessageEmbed} = require('discord.js')
const groupID = '11938979'
module.exports = {
  name: 'demote',
  description: "demotes (obviously)",
  permissions: ["READ_MESSAGE_HISTORY"], 
  execute(client, message, args){ 
 const robloxname = args[0]
 //await can only be used in async functions!
async function DemoteUser (groupId, robloxname) { 
  rbx.getIdFromUsername(robloxname).catch(err => {
            return msg.reply(
              "sorry, that user doesn't seem to exist on ROBLOX."
            );
          });
          rbx.getIdFromUsername(robloxname).then(userId => {
            // gets user id for the specific part of the embed
              if (userId) {
 if (!userId) return console.log("No id was returned.");
    const oldRank = noblox.getRankNameInGroup(groupID, userId)
 noblox.demote(groupID, userId); //Use the value returned to demote the user.
}
   
   const rankname = noblox.getRankNameInGroup(groupID, userId)
      const user = message.author 
      const embed = new Discord.MessageEmbed()
        .setTitle('User Demoted')
        .setDescription(`**${robloxname}** was Demoted to "**${rankname}**"`)
        .addField('Group', (noblox.getGroup(groupID)).name)

        .addField('Ranking User', user)
        .setURL(`https://www.roblox.com/users/${robloxid}/profile`)
        .setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${robloxid}&width=420&height=420&format=png`)          .setColor('#DC143C')
        .setTimestamp()
                            
      message.reply({ embeds: [embed]});
    })
  }
}
}