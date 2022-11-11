// tier 2 - user 

module.exports = {
    name: 'bf',
    description: 'reaction test command',
    execute(message, args){
        message.react('1040705735174127626');
        message.react('1040704563780538448');
    }
}