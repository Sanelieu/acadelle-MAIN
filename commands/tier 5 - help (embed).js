// tier 5 - bot owners

const Discord = require("discord.js");
const ownerID = [
    "896962315512086549", // Emerald
    "446426955894489089"  // Vul (alt)
];
const botversion = 'acadelle v0.1.2'

module.exports = {
    name: 'ohelp', 
    description: 'owner help embed',
    execute(message, args, discord){
        if (!ownerID.includes(message.author.id)) return;
        const NewEmbed = new discord.MessageEmbed()
        .setColor('#ff8170')
        .setTitle('**owner HELP DECK**')
        .setURL('')
        .setDescription(botversion)
        .addFields(
            {name:'💛 Commands available: 💛', value: '.kms'}
        )
        .setImage('https://i.pinimg.com/originals/99/c6/ca/99c6cadb02d2174dfcbebe7f46bba09f.gif');
        
        message.channel.send(NewEmbed);
    }
}