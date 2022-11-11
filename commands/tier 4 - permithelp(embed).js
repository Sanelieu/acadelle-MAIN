// tier 1 - base

module.exports = {
    name: 'phelp', 
    description: 'phelp embed',
    execute(message, args, discord){
        const NewEmbed = new discord.MessageEmbed()
        .setColor('#f0c03e')
        .setTitle('**permit HELP DECK**')
        .setURL('')
        .setDescription('Bot version: v0.1.2 (beta)')
        .addFields(
            {name:'NOTE(s): Permits- $150 USD; contact sanelieu1@gmail.com for inquiries \n💛 Commands available: 💛', value: '.plist\n.permittest'}
        )
        .setImage('https://i.pinimg.com/originals/39/11/d8/3911d824cefef95bb5fea1d07b65c29d.gif');
        
        message.channel.send(NewEmbed);
    }
}