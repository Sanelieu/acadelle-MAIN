const Discord = require("discord.js");
const permitID = ("896962315512086549", "937418844966879243", "877940496352301096")

module.exports = {
    name: 'permittest',
    description: 'blank command',
    execute(message, args){
        if (message.author.id !== permitID) return;
        message.channel.send ('seems that you have a permit ^^');
    }
}