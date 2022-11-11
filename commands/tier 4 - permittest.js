// tier 4 - permits

const Discord = require("discord.js");
const permitID = [
    "896962315512086549", // ln.4
    "937418844966879243", // ln.5
    "877940496352301096" // ln.6
];


module.exports = {
    name: 'permittest',
    description: 'blank command',
    execute(message, args){
        if (!permitID.includes(message.author.id)) return;
        
        message.channel.send ('seems that you have a permit ^^');
    }
}
