// tier 3 - guild admins

const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kick command',
  guildOnly: true,
    usage: `.kick <USER_MENTION> <OPTIONAL_REASON>`,
    cooldown: 5,
    async execute(message, args, client) {

const daidinevermantion = new MessageEmbed()
        daidinevermantion.setTitle('Incorrect arguments provided!')
        daidinevermantion.setDescription('You gotta mention a user to kick :(')
        daidinevermantion.addField('Usage','``.kick <USER_MENTION> <OPTIONAL REASON>``')
        daidinevermantion.setColor('#f0c03e')
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I don\'t think I have permissions for that..')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        if(!args[0]) return message.channel.send(daidinevermantion);

        if(!member) return message.channel.send('Peek-a-boo! I can\'t seem to find that user :(');
        if(!member.kickable) return message.channel.send('This user can\'t be kicked, are they above me?');

        if(member.id === message.author.id) return message.channel.send('You can\'t kick yourself, sillygoose </3');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        member.kick({ days: 7, reason: reason }).catch(err => { 
          message.channel.send('Something went wrong')
            console.log(err)
        })

        member.kick({ days: 7, reason: reason });
            message.channel.send('Member kicked, happy? :D')
          }
        }


