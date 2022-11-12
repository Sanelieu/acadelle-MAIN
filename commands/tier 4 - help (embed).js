// tier 4 - permits

const botversion = 'acadelle v0.1.2'
const Discord = require("discord.js");
const permitID = [
    "896962315512086549", // Emerald
    "937418844966879243", // Matt
    "877940496352301096", // Angel
    "446426955894489089"  // Vul (alt)
];

module.exports = {
    name: 'phelp', 
    description: 'phelp embed',
    execute(message, args, discord){
        if (!permitID.includes(message.author.id)) return;
        const NewEmbed = new discord.MessageEmbed()
        .setColor('#f0c03e')
        .setTitle('**permit HELP DECK**')
        .setURL('')
        .setDescription(botversion)
        .addFields(
            {name:'NOTE(s): Permits- $150 USD; contact sanelieu1@gmail.com for inquiries \n💛 Commands available: 💛', value: '.plist\n.permittest'}
        )
        .setImage('https://i.pinimg.com/originals/39/11/d8/3911d824cefef95bb5fea1d07b65c29d.gif');
        
        message.channel.send(NewEmbed);
    }
}