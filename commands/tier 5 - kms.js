// tier 5 - bot owners

const Discord = require("discord.js");
const ownerID = [
    "896962315512086549", // Emerald
    "446426955894489089"  // Vul (alt)
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