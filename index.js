const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";
const {prefix}= require('./config.json');

client.on('ready', () => {
  console.log('켰다.');
  console.log();
  console.log('시작명령은 ' + prefix + '입니다.')
  client.user.setPresence({ game: { name: '저는 사실 노래봇이 아니랍니다 ><' }, status: 'online' })

})

client.on('message', message => {
  if (message.content.startsWith(prefix + '피드백')) {
    if(message.channel.type == 'dm') {
    let contents = message.content.slice((prefix + '피드백').length);
    client.channels.get("761866591259590698").send({embed: new Discord.RichEmbed().setColor("#FFFFFF").setAuthor("⚠️").setDescription(`**<@${message.author.id}>님께서 피드백을 하셨습니다.**\n\n${contents}`)});
  };
  if(message.channel.type == 'dm') {

  let embed2 = new Discord.RichEmbed()
  .setDescription("피드백 감사합니당")
  .setColor('#22b14c')

  message.author.send(embed2)
  } else
  message.author.send({embed3: {
    color: 15158332,
    description: "Failed :(\n\nPlease send to me again =="
  }})
}
});


client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'ping')) {
    message.channel.send({embed: {
      color:  3447003,
      description: client.ping + '** ms**'
    }})
  }
        
          if(message.content.startsWith(prefix + '명령어'))
          {
            if(message.channel.type == 'dm') {
            return message.reply(`**즐거운 하루에요!**\n\n**?ping**\n현재 <@${message.author.id}>님의 핑을 확인할 수 있어요\n\n**?봇**\n봇을 초대할 수 있는 기능이에요\n\n**?초대**\n서버의 초대코드입니다\n\n**?피드백 [내용]**\n봇에게 피드백을 보낼 수 있어요(이걸로 기능이 추가될 수 있겠죠?...)`)
            }
          }

          if(message.content.startsWith(prefix + '초대'))
          {
            return message.reply('저희 서버의 초대코드에요!\nhttps://discord.gg/3sCwvkN')
          }

          if(message.content.startsWith(prefix + '봇'))
          {
            if(message.channel.type == 'dm') {
            let embed = new Discord.RichEmbed()
            .setTitle('링크 클릭 시 볼륨을 초대할 수 있어요!')
            .setDescription('[클릭](https://discord.com/api/oauth2/authorize?client_id=768057316339613696&permissions=8&scope=bot)')
            .setColor('#22b14c')

            message.channel.send(`<@${message.author.id}>`)
            message.channel.send(embed)
            }
          }

          if(message.content.includes('안녕'))
          {
            var his = ["나도 만나서 반가워!", "안녕 너는 어디 살아?", "좋은 아침이야!"];
            var hi = Math.floor(Math.random() * his.length);

            return message.reply(his[hi])
          }
  
    



if(message.content.startsWith(prefix + '전체공지2')) {
  if(message.channel.type == 'dm') {
    return message.reply({embed: {
      color: 15158332,
      description: "**DM에서 사용하실 수 없는 명령어입니다 !**"
    }});
  }
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice((prefix + '전체공지2').length);
      let img = 'https://storage1.upload.pe/storage/2020/10/04/9gQpWeKE8X.png';
      let embed = new Discord.RichEmbed()
        .setColor('#7f4dff')
        .setFooter('Filer', img)
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
  } else if(message.content.startsWith(prefix + '전체공지')) {
    if(message.channel.type == 'dm') {
      return message.reply({embed: {
        color: 15158332,
        description: "**DM에서 사용하실 수 없는 명령어입니다 !**"
      }});
    }
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice((prefix + '전체공지').length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith(prefix + '청소 ')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice((prefix + '청소 ').length);
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