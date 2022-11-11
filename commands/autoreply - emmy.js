module.exports = {
    name: 'emmy',
    description: 'reaction test command',
    execute(message, args){
        message.react('💚');
    }
}