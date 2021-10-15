module.exports = {
    name: 'say',
    description: "Says whatever you'd like it to say. ",
    permissions: ["READ_MESSAGE_HISTORY"],
    execute(message, args){ 
        let msg = args.slice(1).join(` `);
		message.delete();
		message.channel.send(msg);
}}
