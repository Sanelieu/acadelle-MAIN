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


// testing - sanelieu w/ permit permissions
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args =  message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'permittest'){
        client.commands.get('permittest').execute(message, args);
    } else {
        if(command == 'support'){
            client.commands.get('support').execute(message, args, Discord);
        }
    }
});


// dont scroll past this point


























client.login('MTAzNjMxOTU5ODM3NjY2OTIzNw.Gv2wSs.Lskk_SgcpMD-IAvI8bTeUqoqmYSHIa5yi1Crss');