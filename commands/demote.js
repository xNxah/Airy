const noblox = require('noblox.js');
const {MessageEmbed} = require('discord.js')
const groupId = '11938979'
module.exports = {
    name: 'demote',
    description: "demotes (obviously)",
    permissions: ["READ_MESSAGE_HISTORY"], 
    execute(client, message, args){ 
      const robloxname = args[1]
      if (!robloxname) return  message.lineReplyNoMention("Please run the command again and provide a username.")
      const robloxid = noblox.getIdFromUsername(robloxname)
      const oldRnk = noblox.getRankNameInGroup(groupID, robloxid)
                      noblox.demote(config.GroupID, robloxid)
                          .then(async (success) => {

                              const rankname = noblox.getRankNameInGroup(groupID, robloxid)
                              const user = message.author
                              const embed = new Discord.MessageEmbed()
                                  .setTitle('User Demoted')
                                  .setDescription(`**${robloxname}** was Demoted to "**${rankname}**"`)
                                  .addField('Group', (noblox.getGroup(config.GroupID)).name)
                                  .addField('Old Rank', oldRnk)
                                  .addField('Ranking User', user)
                                  .setURL(`https://www.roblox.com/users/${robloxid}/profile`)
                                  .setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${robloxid}&width=420&height=420&format=png`)
                                  .setColor('#DC143C')
                                  .setTimestamp()
                            
                              message.reply({ embeds: [embed]});
                          })
                        }
                      }