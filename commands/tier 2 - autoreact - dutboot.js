// tier 2 - user 

module.exports = {
    name: 'dutboot',
    description: 'reaction test command',
    execute(message, args){
        message.react('1040750268691787976');
        message.react('1040750506680786974');
    }
}