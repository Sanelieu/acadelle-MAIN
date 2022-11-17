// tier 0 - throw away

const { version } = require("discord.js")
const botversion = 'acadelle v0.1.3'

module.exports = {
    name: 'e', 
    description: 'throwaway embed',
    execute(message, args, discord){
        const NewEmbed = new discord.MessageEmbed()
        .setColor('#b3d0ff')
        .setTitle('**acadelle VERIFICATION**')
        .setURL('https://discord.gg/terms')
        .setDescription(botversion) 
        .addFields(
            {name:'React to this message to verify', value: 'If any issues, ping <@896962315512086549>'}
        )
        .setImage('https://i.pinimg.com/564x/c5/64/75/c564759c19fb249b975b28c7c5efe678.jpg');
        
        message.channel.send(NewEmbed);
    }
}