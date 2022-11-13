// tier 2 - user

module.exports = {
    name: 'test',
    description: 'test command',
    execute(message, args){
        message.channel.send ('Hello! ^^, do you need something?');
    }
}
