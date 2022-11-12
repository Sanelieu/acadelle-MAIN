// tier 2 - user 

module.exports = {
    name: 'emmy',
    description: 'reaction test command',
    execute(message, args){
        message.react('1010442218672242760');
        message.react('1010442107191828571');
    }
}