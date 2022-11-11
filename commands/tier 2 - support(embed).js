// tier 2 - user

module.exports = {
    name: 'support', 
    description: 'support embed',
    execute(message, args, discord){
        const NewEmbed = new discord.MessageEmbed()
        .setColor('#f0c03e')
        .setTitle('**acadelle SUPPORT**')
        .setURL('')
        .setDescription('Please email __sanelieu1@gmail.com__. typical replies are within an hour <3')
        .addFields(
            {name:'NOTE:', value: 'Discord support server is planning to be in the works. Use the .update command!'}
        )
        .setImage('https://i.pinimg.com/originals/ce/b0/90/ceb0908b5538e86349a958e6ae2c6915.gif');
        
        message.channel.send(NewEmbed);
    }
}