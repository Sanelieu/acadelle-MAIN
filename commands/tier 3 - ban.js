// tier 3 - guild admins

const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban command',
  guildOnly: true,
    usage: `.ban <USER_MENTION> <OPTIONAL_REASON>`,
    cooldown: 5,
    async execute(message, args, client) {

const daidinevermantion = new MessageEmbed()
        daidinevermantion.setTitle('Incorrect arguments provided!')
        daidinevermantion.setDescription('Please Mention a user to ban ;-;')
        daidinevermantion.addField('Usage','``.ban <USER_MENTION> <OPTIONAL REASON>``')
        daidinevermantion.setColor('#f0c03e')
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t think I have permissions for that..')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        if(!args[0]) return message.channel.send(daidinevermantion);

        if(!member) return message.channel.send('Peek-a-boo! I can\'t seem to find that user :(');
        if(!member.bannable) return message.channel.send('This user can\'t be banned, are they above me?');

        if(member.id === message.author.id) return message.channel.send('You can\'t ban yourself, sillygoose </3');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        member.ban({ days: 7, reason: reason }).catch(err => { 
          message.channel.send('Something went wrong')
            console.log(err)
        })

        member.ban({ days: 7, reason: reason });
            message.channel.send('Member banned, happy? :D')
          }
        }


