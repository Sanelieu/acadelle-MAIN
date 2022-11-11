const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';
const fs = require('fs');
//import dotenv from 'dotenv'
//dotenv.config()

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('good morning, sanelieu');
    client.user.setActivity(".help", { type: "PLAYING" });
});



// commands --------------------------------------------------------------------------------------------------

// from handler (tier 1-2)
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
    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else {
        if(command == 'update'){
            client.commands.get('update').execute(message, args, Discord);
        }
    }
});
// autoreply commands - tier 1

client.on('message', (message) => {
    if (message.author.bot) return;
    const unprefixedCommands = ['emmy'];
    const isUnprefixedCommand = unprefixedCommands.includes(message.content.toLowerCase());
    if (!isUnprefixedCommand && !message.content.startsWith(prefix)) return;
    let args;
    let command;

    if (isUnprefixedCommand) {

      args = message.content.split(/ +/);

      command = message.content.toLowerCase();
    } else {
      args = message.content.slice(prefix.length).split(/ +/);
      command = args.shift().toLowerCase();
    }
  
    if (command === 'emmy') {
      client.commands.get('emmy').execute(message, args);
    } else if (command === '') {
      client.commands.get('').execute(message, args);
    }
  });

// tier 3 handles


// tier 4 handles
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args =  message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'permittest'){
        client.commands.get('permittest').execute(message, args);
    } else {
        if(command == 'plist'){
            client.commands.get('permitlist').execute(message, args);
        }
    }
});


// commands --------------------------------------------------------------------------------------------------
// these were made offline, and to be tested



// -----------------------------------------------------------------------------------------------------------
// dont scroll past this point

























//client.login();
client.login('MTAzNjMxOTU5ODM3NjY2OTIzNw.Gv2wSs.Lskk_SgcpMD-IAvI8bTeUqoqmYSHIa5yi1Crss');