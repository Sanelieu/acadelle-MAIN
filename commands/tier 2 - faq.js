// tier 2 - user

module.exports = {
    name: 'faq',
    description: 'faq command',
    execute(message, args){
        message.channel.send ('**FREQUENTLY ASKED QUESTIONS**\n\n__*Why are permits so expensive?*__ - Well, we really don\'t want people having them, realistically.');
    }
}