// tier 4 - permits

const Discord = require("discord.js");
const permitID = [
    "896962315512086549", // Emerald
    "937418844966879243", // Matt
    "877940496352301096", // Angel
    "446426955894489089"  // Vul (alt)
];


module.exports = {
    name: 'permitlist',
    description: 'list of permit users',
    execute(message, args){
        if (!permitID.includes(message.author.id)) return;
        
        message.channel.send ('``current users with a permit``\n\n896962315512086549\n937418844966879243\n877940496352301096\n446426955894489089');
    }
}
