// tier 4 - permits

const Discord = require("discord.js");
const permitID = [
    "896962315512086549", // Emerald
    "937418844966879243", // Matt
    "877940496352301096", // Angel
    "446426955894489089"  // Vul (alt)
];


module.exports = {
    name: 'permittest',
    description: 'blank command',
    execute(message, args){
        if (!permitID.includes(message.author.id)) return;
        
        message.channel.send ('seems that you have a permit ^^');
    }
}
