const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'rps',
    description: "Plays a game of rps. ",
    permissions: ["READ_MESSAGE_HISTORY"],
    execute(client, message, args){
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return message.channel.send(`How to play: -rps rock|paper|scissors\`);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        console.log('Bot Result:', result);
        if (result === choice) return message.reply("It's a tie! We had the same choice.");
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper') return message.reply(`${result} I won!`);
                else return message.reply(`${result}You won!`);
            }
            case 'paper': {
                if (result === 'scissors') return message.reply(`${result} I won!`);
                else return message.reply(`${result}You won!`);        
            }
            case 'scissors': {
                if (result === 'rock') return message.reply(`${result} I won!`);
                else return message.reply(`${result}You won!`);
            }
            default: {
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }
        }
    }
}
