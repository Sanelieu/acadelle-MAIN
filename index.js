const Discord = require('discord.js'); // makes it a discord bot
const client = new Discord.Client();
const prefix = '.'; // the bot prefix
const config = require('./config.json'); // assigns the bot a token lol
const fs = require('fs');
//const slash = require('discord-slash-commands-v12');
//slash(client);


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}


client.once('ready', () => {
    console.log('good morning, sanelieu');
    client.user.setActivity(".help", { type: "PLAYING" }); // sets the activity presence; or is supposed to
});

//this seems to not do anything lol
client.on('messageCreate', (message) => {
	console.log(message.content);
	console.log(message.createdAt.toDateString());
	console.log(message.author.tag);
})


// commands --------------------------------------------------------------------------------------------------

// from handler (tier 1-2)
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args =  message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'test'){
        client.commands.get('test').execute(message, args); // test command
    } else {
        if(command == 'support'){
            client.commands.get('support').execute(message, args, Discord); // support command (embed)
        }
    }
    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord); // help command (embed)
    } else {
        if(command == 'update'){
            client.commands.get('update').execute(message, args, Discord); // shows latest bot features (embed)
        }
    }
    if(command === 'autoreply'){
        client.commands.get('autoreply').execute(message, args); // shows list of autoreplies
    } else {
        if(command == 'ar'){
            client.commands.get('autoreply').execute(message, args); // alternative to .autoreply
        }
    }
});
// autoreply commands - tier 1
client.on('message', (message) => {
    if (message.author.bot) return;
    const unprefixedCommands = ['emmy', 'matt', 'welc', 'welcome', 'dutboot'];
    // lists the unprefixed commands ^^
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
      client.commands.get('emmy').execute(message, args); // reacts to the standalone word "emmy"
    } else if (command === 'matt') {
      client.commands.get('bf').execute(message, args); // reacts to the standalone word "matt"
    }
    if (command === 'welc') {
        client.commands.get('welcome').execute(message, args); // reacts to the standalone word "welc"
      } else if (command === 'welcome') {
        client.commands.get('welcome').execute(message, args); // reacts to the standalone word "welcome"
      }
      if (command === 'dutboot') {
        client.commands.get('dutboot').execute(message, args); // reacts to the standalone word "dutboot"
      } else if (command === '') {
        client.commands.get('').execute(message, args);
      }
  });

// tier 3 handles
// ban, unban, kick, timeout, etc.
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args =  message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ban'){
        client.commands.get('ban').execute(message, args); // should ban a user
    } else {
        if(command == 'kick'){
            client.commands.get('kick').execute(message, args); // should kick a user
        }
    }
    if(command === 'ahelp'){
        client.commands.get('ahelp').execute(message, args, Discord); // guild admin help command
    } else {
        if(command == ''){
            client.commands.get('').execute(message, args); // 
        }
    }

});

// tier 4 handles
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args =  message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'permittest'){
        client.commands.get('permittest').execute(message, args); // test to see if a user has a permit
    } else {
        if(command == 'plist'){
            client.commands.get('permitlist').execute(message, args); // list of id's with permits
        }
    }
    if(command === 'phelp'){
        client.commands.get('phelp').execute(message, args, Discord); // tier 4 help command
    } else {
        if(command == 'faq'){
            client.commands.get('faq').execute(message, args); // answers to frequently asked questions
        }
    }
});


// tier 5 handles
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args =  message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'kms'){ 
        client.commands.get('kms').execute(message, args); // kills the bot
    } else {
        if(command == 'ohelp'){
            client.commands.get('ohelp').execute(message, args, Discord);
        }
    }
    if(command === 'valkrecovery'){ 
        client.commands.get('valkrecovery').execute(message, args, Discord); // kills the bot
    } else {
        if(command == ''){
            client.commands.get('').execute(message, args, Discord);
        }
    }
});

// commands --------------------------------------------------------------------------------------------------
// these were made offline, and to be tested


// -----------------------------------------------------------------------------------------------------------
client.login(config.token) //acadelle