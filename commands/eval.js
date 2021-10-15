module.exports = {
    name: 'eval',
    description: "eval idk",
    permissions: ["READ_MESSAGE_HISTORY"],
    execute(client, message, args){ 

    const args1 = message.content.split(" ").slice(1);
    var ownerID = ["543447797270052864", "827986018027307060"]
        if (message.author.id !== ownerID)
        return;
        try {
        const evaled = eval(args1.join(" "));
        const cleaned = await clean(evaled);
        message.channel.send(`\`\`\`js\n${cleaned}\n\`\`\``);
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${cleaned}\n\`\`\``);
      }
    }
}