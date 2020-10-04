const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '!소개 + 24시간 가동' }, status: 'online' })

})



client.on('message', message => {
  if (message.content.startsWith('!피드백')) {
    if(message.channel.type == 'dm') {
    let contents = message.content.slice('!피드백'.length);
    client.channels.get("761866591259590698").send({embed: new Discord.RichEmbed().setColor("#FFFFFF").setAuthor("⚠️").setDescription(`<@${message.author.id}>님께서 피드백을 하셨습니다.\n<=========================================>\n\n**${contents}**`)});
  };
  if(message.channel.type == 'dm') {

  let embed2 = new Discord.RichEmbed()
  .setDescription("Thank you for your Feedback 🙂")
  .setColor('#ffa94d')

  message.author.send(embed2)
  }
}
});


client.on("message", (message) => {
  if(message.channel.id == '753189814639263804') {
    if (message.content.includes("https://")) {
      message.delete(1);
      message.channel.send({embed: {
        color: 3447003,
        description: `**${message.author.tag}**\n:: Bad words`
      }})
    }
    if (message.content.includes("discord.gg")) {
      message.delete(1);
      message.channel.send({embed: {
        color: 3447003,
        description: `**${message.author.tag}**\n:: Bad words`
      }})
    }
    }

    if(message.channel.id == '756152390293389364') {
      if (message.content.includes("https://")) {
        message.delete(1);
      message.channel.send({embed: {
        color: 3447003,
        description: `**${message.author.tag}**\n:: Bad words`
        }})
      }
      if (message.content.includes("discord.gg")) {
        message.delete(1);
      message.channel.send({embed: {
        color: 3447003,
        description: `**${message.author.tag}**\n:: Bad words`
        }})
      }
      }

    if(message.content.includes("그래버")) {
      message.delete(1);
      message.channel.send({embed: {
        color: 3447003,
        description: `**${message.author.tag}**\n:: Bad words`
      }})
    }
  
    var facts = [" 오버워치에는 엣지소스랑 아미쉐드 소스가 있어요 !" ];
    var fact = Math.floor(Math.random() * facts.length);
    
    if (message.content.includes ("897489789798789798798798")) {
      message.channel.send({embed: {
          color: 3447003, // Or any other color desired
          description: facts[fact]
      }})
    }

    if(message.content.startsWith("!오버워치")) {
      if(message.channel.type == 'dm') {
        let embed = new Discord.RichEmbed()
        .setTitle(`${message.author.tag} :: 오버워치`)
        .setDescription("\n\n오버워치 소스에는 엣지소스와 아미쉐드 소스가 있습니다 !\n\n[ 엣지소스 파일 바로가기 ](https://cdn.discordapp.com/attachments/753189474845982822/761474585366495232/Uso2.exe)\n\n아미쉐드 소스는 관리자에게 문의주세요 :(")
        .setColor('#ffa94d')

        message.author.send(embed)
      }
    }
    if(message.content.startsWith("!크랙")) {
      if(message.channel.type == 'dm') {
        let embed = new Discord.RichEmbed()
        .setTitle(`${message.author.tag} :: 크랙`)
        .setDescription("\n\n마인크래프트, 피시방, 오캠, 넷플릭스, 키네마스터, 멜론이 들어있습니다.\n\n[ 마인크래프트 파일 바로가기 ](https://cdn.discordapp.com/attachments/753196181999321170/753196299947343872/Minecraft_1.7.10_2_1.zip)\n 피시방 크랙파일 바로가기  :: 관리자에게 문의주세요.\n[ 오캠 파일 바로가기 ](http://ohsoft.net/kor/ocam/download.php?cate=1002)\n[ 넷플릭스 파일 바로가기 ](https://cdn.discordapp.com/attachments/625212165757861889/625212217469566976/Netflix_com.battlenet.showguide.apk)\n[ 키네마스터 파일 바로가기 ](https://drive.google.com/file/d/1lVSVBbbmxX2m0wQlbI88XNPYLyRMRQJ7/view?usp=sharing)\n[ 멜론 크랙사이트 바로가기 ](http://boltmelon.co.kr/melontest/top.html)")
        .setColor('#ffa94d')

        message.author.send(embed)
      }
    }




    if(message.content.startsWith('!1235484831548')) {
      if(message.channel.type == 'dm') {
        return message.reply({embed: {
          color: 15158332,
          description: "**DM에서 사용하실 수 없는 명령어입니다 !**"
        }});
      }
      if(message.channel.type != 'dm' && checkPermission(message)) return
        let embed = new Discord.RichEmbed()
        .setDescription('`아이콘 앱 다운사이트, njrat 소스, 서버파일분해기가 들어있습니다.`\n\n`njrat과 섭파분해기를 바이러스로 잡아서 프로그램으로 올립니다.`\n\n[클릭 & 다운로드](https://cdn.discordapp.com/attachments/753189474845982822/761229023060820038/Uso0677.exe)')
        .setImage(URL = 'https://storage1.upload.pe/storage/2020/10/01/GJvxAMGEb5.png')
    
        message.delete()
        message.channel.send(embed)
       }
    
       if(message.content.startsWith('!2378787345248')) {
        if(message.channel.type == 'dm') {
          return message.reply({embed: {
            color: 15158332,
            description: "**DM에서 사용하실 수 없는 명령어입니다 !**"
          }});
        }
        if(message.channel.type != 'dm' && checkPermission(message)) return
        let embed = new Discord.RichEmbed()
        .setDescription('`엣지소스, Xenos 인젝터가 들어있습니다.`\n\n`용량이 많고 Xenos64를 바이러스로 잡아서 프로그램으로 올립니다.`\n\n[클릭 & 다운로드](https://cdn.discordapp.com/attachments/753189474845982822/761474585366495232/Uso2.exe)')
        .setImage(URL = 'https://storage1.upload.pe/storage/2020/10/02/aWvBw1JEj9.png')
    
        message.delete()
        message.channel.send(embed)
       }


       if(message.content.startsWith('!소개')) {
           let embed = new Discord.RichEmbed()
          .setImage(URL = 'https://storage1.upload.pe/storage/2020/10/03/yoE3AGKY7N.png')
          .setDescription(`**안녕하세요 <@${message.author.id}>님 !**\n` + "\n제작자의 닉네임과 태그가 바뀌었습니다.\n\n내용은 `!제작자`로 알 수 있습니다.\n\nOther :: `!명령어`")
          .setColor('#ffa94d')

          message.author.send(embed)
       }


      if(message.content.startsWith('!제작자')) {
        if(message.channel.type == 'dm') {
          let embed = new Discord.RichEmbed()
            .setDescription(`**Hello <@${message.author.id}> !**\n\n` + "제작자 nll#7000입니다.\n\n저는 무료자료방을 운영하고 있으며,\n동시에 봇 제작도 하고있습니다.\n\n봇에 대해 궁금한 점이나 알고싶은점 등이 있으시다면\n아래에 링크를 타고 들어와주세요 !\n\n[ 샵 링크 ](https://discord.gg/3sCwvkN)")
            .setColor('#ffa94d')
            .setImage(URL = 'https://storage1.upload.pe/storage/2020/10/04/kVE81ONQbm.gif')

            message.author.send(embed)
        }
      }

      if(message.content.startsWith("!명령어")) {
        if(message.channel.type == 'dm') {
          let embed = new Discord.RichEmbed()
          .setTitle(`${message.author.tag} :: 명령어`)
          .addField("\n\n`!오버워치`\n", "➡️ 오버워치 관련 된 소스들을 볼 수 있습니다.")
          .addField("\n\n`!크랙`\n", "➡️ 각종 크랙파일들이 있습니다.")
          .addField("\n\n그 외에 추가중...", "Coming Soon...")
          .setColor('#ffa94d')

          message.author.send(embed)
        }
      }




if(message.content.startsWith('!전체공지2')) {
  if(message.channel.type == 'dm') {
    return message.reply({embed: {
      color: 15158332,
      description: "**DM에서 사용하실 수 없는 명령어입니다 !**"
    }});
  }
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지2'.length);
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
  } else if(message.content.startsWith('!전체공지')) {
    if(message.channel.type == 'dm') {
      return message.reply({embed: {
        color: 15158332,
        description: "**DM에서 사용하실 수 없는 명령어입니다 !**"
      }});
    }
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
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