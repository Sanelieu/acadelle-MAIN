module.exports = {
    name: 'test',
    description: 'Test ping command',
    execute(message, args){
        message.channel.send ('Test complete, how did I do? ^^');
    }
}