// tier 3 - guild admins

const botversion = 'acadelle v0.1.3'

module.exports = {
    name: 'ahelp', 
    description: 'admin help embed',
    execute(message, args, discord){
        const NewEmbed = new discord.MessageEmbed()
        .setColor('#f0c03e')
        .setTitle('**admin HELP DECK**')
        .setURL('')
        .setDescription(botversion)
        .addFields(
            {name:'NOTE(s): \n- Slash commands are not currently available, but it\'s a work in progress\n - New button UI for the .help command coming soon\n\n💛 Commands available: 💛', value: '``.kick``  ``.ban``'}
        )
        .setImage('https://i.pinimg.com/originals/e9/57/c1/e957c15c5087a32d46c5bf2da5faef10.gif');
        
        message.channel.send(NewEmbed);
    }
}