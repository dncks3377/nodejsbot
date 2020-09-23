const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: 'Value 개발' }, status: 'online' })

  let state_list = [
    'Value 개발',
  ]
  let state_list_index = 1;
  let change_delay = 3000; // 이건 초입니당. 1000이 1초입니당.

  function changeState() {
    setTimeout(() => {
      console.log( '상태 변경 -> ', state_list[state_list_index] );
      client.user.setPresence({ game: { name: state_list[state_list_index] }, status: 'online' })
      state_list_index += 1;
      if(state_list_index >= state_list.length) {
        state_list_index = 0;
      }
      changeState()
    }, change_delay);
  }

  changeState();
});

client.on("messageUpdate", (message) => {
  MessageSave(message, true)
});
  

client.on('message', (message) => {
  MessageSave(message)
  if(message.author.bot) return;

  if(message.content.startsWith('!역할추가')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    if(message.channel.type != 'dm' && checkPermission(message)) return

    if(message.content.split('<@').length == 3) {
      if(message.content.split(' ').length != 3) return;

      var userId = message.content.split(' ')[1].match(/[\u3131-\uD79D^a-zA-Z^0-9]/ugi).join('')
      var role = message.content.split(' ')[2].match(/[\u3131-\uD79D^a-zA-Z^0-9]/ugi).join('')

      message.member.guild.members.find(x => x.id == userId).addRole(role);
    }
  }


  if(message.content.startsWith('-verify')) {
    if(message.channel.type == 'dm') {
      return message.reply('`DM` 에서 사용하실 수 없는 단어입니다.');
    }
    message.member.addRole("753187605436170270").then(
    )
    let embed = new Discord.RichEmbed()
    .setAuthor("Value Bot")
    .setDescription("**Welcome to My server !**\n\nIf you write `-help` to me, I'll show you the command :)")
    .setColor('#7f4dff')

    message.author.send(embed)
  }

  if(message.content == '-테코') {
    if(message.channel.type == 'dm') {
      return message.reply('dfdfdf')
    }
  }

  if(message.content.startsWith('그래버')) {
    if(message.channel.type == 'dm') {
      return message.reply('사용하실 수 없는 언어입니다.');
    }
    message.reply(" 금지어를 사용하셨습니다.")

    message.member.removeRole("753187605436170270").then(
    ).catch(err => console.log(err))

    message.member.addRole("755648618484203531").then(
    message.react('❌')
    ).catch(err => console.log(err))
  }


  if(message.content == '-value') {
    if(message.channel.type == 'dm') {
      return message.reply('사용하실 수 없는 언어입니다.');
    }
    if(message.channel.type != 'dm' && checkPermission(message)) return

    let embed = new Discord.RichEmbed()
    .setDescription('**```fix\n               𝐕𝐚𝐥𝐮𝐞  \n```**\n**```\n       [ 국내 숙련된 개발자 ]\n```**\n**```diff\n[ Functions ]\n\n+ 테두리 esp\n- 아군 구별\n\n+ 올토샷\n- 벽뒤구분 됩니다.\n\n+ 프레임 드랍이 없습니다.\n```**\n**```css\n[ Price ]\n\n미정\n```**\n\n**투자문의 [ https://discord.gg/3sCwvkN ]**')
    .setImage(url = 'https://cafeptthumb-phinf.pstatic.net/MjAyMDA5MTlfMjM4/MDAxNjAwNTI3MDc1MTc0.Fg6oAcsDavWFtT1gQ3Yrhs9qwl1v4Rgsp7XSW8UQwR0g.fEAURJT8KmxLZ9oZJ8nQam1dEgCJ1qepQrKRSkR4R4Eg.PNG/V_%281%29.png?type=w1600')
    .setColor('#7f4dff')

    message.delete()
    message.channel.send(embed)
  }

  if(message.content == '-ping') {
    return message.reply(client.ping + ' **pong**');
  }

  
  if(message.content == '-help') {
    if(message.channel.type == 'dm') {
    let embed = new Discord.RichEmbed()
    .setTitle('**Commands**')
    .setDescription('**```css\n[ -help ]\n Show you the ohter commands\n\n[ -ping ]\n Ping information\n\n[ -invite ]\n Shop invite code\n```**')
    .setImage(URL = 'https://cdn.discordapp.com/avatars/752869982765056051/928a55e5e4450a52347ea9c1e26806e5.png?size=128')
    .setColor('#7f4dff')

    message.channel.send(embed)
   }
  }
  
if(message.content == '-ㅌ') {
  let embed = new Discord.RichEmbed()
  .setTitle('**VOTE**')
  .setDescription('**```diff\n+ 샵 초대이벤트 보상을 50명당 핵 3일 지급 하는걸로 할려하는데 좋을까요?\n\n[-] 이벤트를 하고 다음주 수요일까지 투자금이 모인다면  7일로 업그레이드 해드리겠습니다.\n```**')
  .setColor('#7f4dff')

  message.delete()
  message.channel.send('@everyone')
  message.channel.send({embed: embed}).then(embedMessage => {
    embedMessage.react('🟢');
    embedMessage.react('❌');
  })
}

  if(message.content == '-ㄱ') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    } 
    if(message.channel.type != 'dm' && checkPermission(message)) return

    let img = '';
    let embed = new Discord.RichEmbed()
    .setDescription('**```fix\n배너문의는 LIMO#9860 으로 해주세요\n```**')
    .setColor('#7f4dff')

    message.delete();
    message.channel.send('@everyone')
    message.channel.send(embed)
  }

  if(message.content == '-iv') {
    if(message.channel.type == 'dm') {
      
    let embed = new Discord.RichEmbed()
      .setTitle('**```총 10만원의 투자를 받습니다.```**')
      .setDescription('**```diff\n+ 투자비용은 3.5만 받고 무제한 드리는걸로 상의했습니다.\n```**')
      .setFooter('투자문의 LIMO#9860')
      .setColor('#7f4dff')

      message.channel.send(embed)
    }
  }

  if(message.content == '-v') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    if(message.channel.type != 'dm' && checkPermission(message)) return

    let embed = new Discord.RichEmbed()
    .setTitle('**Welcome**')
    .setDescription('**```diff\n-verify 입력하시면 역할이 부여됩니다.\n```**\n**※ 테러를 방지하기 위해 설치했습니다.**')
    .setFooter('인증 안되시면 관리자한테 얘기해주세요')
    .setColor('#7f4dff')

    message.delete()
    message.channel.send('||@everyone||')
    message.channel.send(embed)
  }
    
  if(message.content == '-invite') {
    if(message.channel.type == 'dm') {
      return message.reply('https://discord.gg/3sCwvkN');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
  }

  if(message.content.startsWith('-전체공지2')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('-전체공지2'.length);
      let embed = new Discord.RichEmbed()
        .setAuthor('무료자료샵')
        .setColor('#7f4dff')
        .setFooter(`무료자료샵`)
        .setTimestamp()
  
      embed.addField('**공지**', contents);
  
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
          AutoMsgDelete(message, parseInt(clearLine) + "removed message...");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "`명령어를 수행할 관리자 권한을 소지하고 있지않습니다.`")
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