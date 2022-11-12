// tier 1 - base

const { version } = require("discord.js")
const botversion = 'acadelle v0.1.2'

module.exports = {
    name: 'help', 
    description: 'help embed',
    execute(message, args, discord){
        const NewEmbed = new discord.MessageEmbed()
        .setColor('#f0c03e')
        .setTitle('**acadelle HELP DECK**')
        .setURL('')
        .setDescription(botversion) 
        .addFields(
            {name:'NOTE(s): \n- Slash commands are not currently available, but it\'s a work in progress\n - New button UI for the .help command coming soon\n\n💛 Commands available: 💛', value: '.test\n.support\n.plain\n.update\n.help\nautoreact\n\ndutboot\nemmy\nmatt\nwelcome\n\n**other help commands:**\nguild admins: .ahelp\npermits: .phelp\nbot owners: .ohelp'}
        )
        .setImage('https://i.pinimg.com/originals/64/76/27/64762723fa4fdcf6114ca8cd970d1e60.gif');
        
        message.channel.send(NewEmbed);
    }
}