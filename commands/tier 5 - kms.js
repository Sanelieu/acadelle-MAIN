// tier 4 - permits

const Discord = require("discord.js");
const ownerID = [
    "896962315512086549" // Emerald
];


module.exports = {
    name: 'kms',
    description: 'kills the bot',
    execute(message, args){
        if (!ownerID.includes(message.author.id)) return;
        
        message.channel.send ('goodnight');
        process.exit(0);
    }
}