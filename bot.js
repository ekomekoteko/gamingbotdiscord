const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "个welcome个")
        const embed = new Discord.RichEmbed()
        .setColor('B90C0C')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('***WELCOME TO SERVER GAMING ♥ ***')
.setThumbnail(member.avatarURL)
  .setImage('https://cdn.pg.sa/9TN1Lmn4TH.gif')
        .setTimestamp()
        return wc.sendEmbed(embed);
        
});





////2 



client.login('BOT_TOKEN');
