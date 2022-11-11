// tier 1 - base

module.exports = {
    name: 'update', 
    description: 'update embed',
    execute(message, args, discord){
        const NewEmbed = new discord.MessageEmbed()
        .setColor('#4a00ab')
        .setTitle('**acadelle RELEASES**')
        .setURL('')
        .setDescription('Bot version: v0.1 (beta)')
        .addFields(
            {name:'- Slash commands are not currently available, but it\'s a work in progress\n - New button UI for the .help command coming soon\n\n💜 New commands available: 💜', value: 'use .help to see them!'}
        )
        .setImage('https://i.pinimg.com/originals/1e/68/4d/1e684d15ad21997f1a92adfae922cfe5.gif');
        
        message.channel.send(NewEmbed);
    }
}