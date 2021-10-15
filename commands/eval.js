module.exports = {
    name: 'eval',
    description: "eval idk",
    permissions: ["READ_MESSAGE_HISTORY"],
    execute(client, message, args){ 

    const args1 = message.content.split(" ").slice(1);
        if(message.author.id !== "543447797270052864" || message.author.id !== "827986018027307060") {
        return;
        {
        const evaled = eval(args1.join(" "));
        message.reply(`\`\`\`js\n${evaled}\n\`\`\``);
      }
    }
}
}