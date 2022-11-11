// tier 1 - base

module.exports = {
    name: 'help', 
    description: 'help embed',
    execute(message, args, discord){
        const NewEmbed = new discord.MessageEmbed()
        .setColor('#9d6bcf')
        .setTitle('**acadelle HELP DECK**')
        .setURL('')
        .setDescription('Bot version: v0.1 (beta)')
        .addFields(
            {name:'NOTE(s): \n- Slash commands are not currently available, but it\'s a work in progress\n - New button UI for the .help command coming soon\n\n💜 Commands available: 💜', value: '.test\n.support\n.plain\n.update\n.help\n.permittest\n.plist'}
        )
        .setImage('https://i.pinimg.com/originals/93/91/cd/9391cdafe739ae11eeb04b904835e643.gif');
        
        message.channel.send(NewEmbed);
    }
}