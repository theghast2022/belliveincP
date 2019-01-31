const Discord = require('discord.js');
const prefix = '!';
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});


client.on('ready',async () => {
  let GUILDID = '540619607841701920'; // اي دي السيرفر
  let CHANNELID = '540644189558276117'; // اي دي الروم
  voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if(!guildid) throw new Error('Syntax: voiceStay function requires guildid');
    if(!channelid) throw new Error('Syntax: voiceStay function requires channelid');

    let guild = client.guilds.get(guildid);
    let channel = guild.channels.get(channelid);

    if(channel.type === 'voice') {
      channel.join().catch(e => {
        console.log(`Failed To Join :: ${e.message}`);
      });
    } else {
      console.log(`Channel Type :: ${channel.type}, It must be Voice.`);
    }
  }
});
client.login(procces.env.BOT_TOKEN);
