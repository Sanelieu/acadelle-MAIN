// tier 2 - user

module.exports = {
    name: 'support', 
    description: 'support embed',
    execute(message, args, discord){
        const NewEmbed = new discord.MessageEmbed()
        .setColor('#ab8aff')
        .setTitle('**acadelle SUPPORT**')
        .setURL('')
        .setDescription('Please email __sanelieu1@gmail.com__. typical replies are within an hour <3')
        .addFields(
            {name:'NOTE:', value: 'Discord support server is planning to be in the works. Use the .update command!'}
        )
        .setImage('https://i.pinimg.com/originals/0b/32/92/0b3292b81f6edb020142fbf0c92a264b.gif');
        
        message.channel.send(NewEmbed);
    }
}