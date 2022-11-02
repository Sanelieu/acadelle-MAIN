module.exports = {
    name: 'test',
    description: 'Test ping command',
    execute(message, args){
        message.channel.send ('Hello! ^^, do you need something?');
    }
}