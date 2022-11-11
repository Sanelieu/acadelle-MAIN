// tier 1 - base

module.exports = {
    name: 'update', 
    description: 'update embed',
    execute(message, args, discord){
        const NewEmbed = new discord.MessageEmbed()
        .setColor('#f0c03e')
        .setTitle('**acadelle RELEASES**')
        .setURL('')
        .setDescription('Bot version: v0.1.2 (beta)')
        .addFields(
            {name:'- Slash commands are not currently available, but it\'s a work in progress\n - New button UI for the .help command coming soon\n\n💛 New commands available: 💛', value: 'use .help to see them!'}
        )
        .setImage('https://i.pinimg.com/originals/ab/a8/a7/aba8a7bd4dc0afa39fb74aa7f8d50b88.gif');
        
        message.channel.send(NewEmbed);
    }
}