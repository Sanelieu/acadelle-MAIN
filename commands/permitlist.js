// tier 4 - permits

const Discord = require("discord.js");
const permitID = [
    "896962315512086549", // ln.4
    "937418844966879243", // ln.5
    "877940496352301096" // ln.6
];


module.exports = {
    name: 'permitlist',
    description: 'list of permit users',
    execute(message, args){
        if (!permitID.includes(message.author.id)) return;
        
        message.channel.send ('``current users with a permit`` \n\n896962315512086549 \n937418844966879243 \n877940496352301096');
    }
}
