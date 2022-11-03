const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';
const fs = require('fs');
const ping = require('./commands/test');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('good morning, sanelieu');
});



// commands --------------------------------------------------------------------------------------------------

// from handler
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args =  message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'test'){
        client.commands.get('test').execute(message, args);
    } else {
        if(command == 'support'){
            client.commands.get('support').execute(message, args, Discord);
        }
    }
    if(command === 'plain'){
        client.commands.get('plain').execute(message, args);
    } else {
        if(command == 'update'){
            client.commands.get('update').execute(message, args, Discord);
        }
    }
});

// ban command
client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
  
  
    //message array
    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const smd = messageArray[0];
  
    //ban
  if (command === 'ban') {
    const member = message.mentions.members.first() || message.guild.members.cache.get(argument[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === argument.slice(0).join(" " || x.user.username === argument[0]));
  
    if(!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return message.channel.send("you dont have permissions like that dear..");
    if (!argument[0]) return message.channel.send("you must specify who youre trying to ban, you know.");
    if (message.member === member) return message.channel.send("you cant ban yourself sillygoose! </3");
    if (!member.kickable) return message.channel.send("this person seems to be too high in the role hierarchy, sorry!");
  
    let reason = argument.slice(1).join(" ") || "no reason given"
  
    const embed = new Discord.EmbedBuilder()
    .setColor("#d5adf7")
    .setDescription(`:broken_heart: ${member.user.tag} has been **banned** | ${reason}`)
  
    const dmEmbed = new Discord.EmbedBuilder()
    .setColor("#d5adf7")
    .setDescription(`:broken_heart: you were banned from ${message.guild.name} | ${reason}`)
  
    member.send({embeds: [dmEmbed]}).catch(err => {
      console.log(`{member.user.tag} has their dms, so i couldnt send the message unfortunately. pathetic.`);
    })
  
    member.ban().catch(err => {
      message.channel.send("there was an error banning this member, my deepest apologies..");
    })
  
    message.channel.send({embeds: [embed]});
  }
  
  
  });

// kick command
client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    // message array
    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const smd = messageArray[0];

    // kick
    if (command === 'kick') {
        const member = message.mentions.members.first() || message.guild.members.cache.get(argument[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === argument.slice(0).join(" " || x.user.username === argument[0]));

        if(!message.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return message.channel.send("you dont have permissions like that dear..");
        if (!argument[0]) return message.channel.send("You must specify who youre trying to kick, you know.");
        if (message.member === member) return message.channel.send("You cant kick yourself sillygoose! </3");
        if (!member.kickable) return message.channel.send("This person seems to be too high in the role hierarchy, sorry!");

        let reason = argument.slice(1).join(" ") || "no reason given"

        const embed = new Discord.EmbedBuilder()
        .setColor("#d5adf7")
        .setDescription(`:broken_heart: ${member.user.tag} has been **kicked** | ${reason}`)

        const dmEmbed = new Discord.EmbedBuilder()
        .setColor("#d5adf7")
        .setDescription(`:broken_heart: you were kicked from ${message.guild.name} | ${reason}`)

        member.send({embeds: [dmEmbed]}).catch(err => {
            console.log(`{member.user.tag} has their dms, so i couldnt send the message unfortunately. pathetic.`);
        })

        member.ban().catch(err => {
            message.channel.send("There was an error kicking this member, my deepest apologies..");
        })

        message.channel.send({embeds: [embed]});
    }


});






// dont scroll past this point


























client.login('MTAzNjMxOTU5ODM3NjY2OTIzNw.Gv2wSs.Lskk_SgcpMD-IAvI8bTeUqoqmYSHIa5yi1Crss');