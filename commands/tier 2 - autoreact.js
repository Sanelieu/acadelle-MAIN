// tier 2 - user

module.exports = {
    name: 'autoreply',
    description: 'list of auto commands',
    execute(message, args){
        message.channel.send ('**These commands do not require a prefix**\nwelc\nwelcome\nemmy\nmatt\ndutboot');
    }
}