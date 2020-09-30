const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '24시간 가동' }, status: 'online' })

})

client.on("messageUpdate", (message) => {
  MessageSave(message, true)
});
  

client.on('message', (message) => {
  MessageSave(message)
  if(message.author.bot) return;






  var facts = ["`제트`", "`피닉스`", "`레이즈`", "`킬조이`", "`사이퍼`", "`브리치`", "`바이퍼`", "`브림스톤`", "`레이나`", "`소바`", "`오멘`", "`세이지`" ];
var fact = Math.floor(Math.random() * facts.length);

if (message.content.startsWith ("!랜덤")) {
  message.channel.send({embed: {
      color: 3447003, // Or any other color desired
      description: facts[fact]
  }})
}


if(message.content.startsWith('!발로란트')) {
    let img = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA2MDdfMTMw%2FMDAxNTkxNDk4ODU2MzM4.BS-huttinQMAErcBplWdnmT1H-ovCWE7_C8AZb8TbAIg.tRCc_aWkhdx1f70LWOmev83NMX0brAtFIOm0b0zAo30g.PNG%2Fvalorant_tile_by_frostyhonky_ddwm3xt-250t.png&type=sc960_832';
    let embed = new Discord.RichEmbed()
    .setTitle(`Uijin's Game status`)
    .setDescription('` Valorant `')
    .setThumbnail(img)
    .setTimestamp()

    message.delete()
    message.channel.send(embed)
  }


  if(message.content.startsWith('!오버워치')) {
    let img = 'https://s.pstatic.net/dbscthumb.phinf/5116_000_1/20171130231249682_M7IW5513T.png/overwatch_logo_3.png?type=m1500_q100';
    let embed = new Discord.RichEmbed()
    .setTitle(`Uijin's Game status`)
    .setDescription('` Overwatch `')
    .setThumbnail(img)
    .setTimestamp()

    message.delete()
    message.channel.send(embed)
  }
  

  if(message.content.startsWith('!오수')) {
    let img = 'http://media.indiedb.com/images/groups/1/11/10111/osulogo4-0.png';
    let embed = new Discord.RichEmbed()
    .setTitle(`Uijin's Game status`)
    .setDescription('` Osu! `')
    .setThumbnail(img)
    .setTimestamp()

    message.delete()
    message.channel.send(embed)
  }

  if(message.content.startsWith('!마크')) {
    let img = 'https://s.pstatic.net/dbscthumb.phinf/5116_000_1/20171130231249674_30P9MUJ0Z.png/logo_4.png?type=m1500_q100';
    let embed = new Discord.RichEmbed()
    .setTitle(`Uijin's Game status`)
    .setDescription('` Minecraft `')
    .setThumbnail(img)
    .setTimestamp()

    message.delete()
    message.channel.send(embed)
  }

  if(message.content.startsWith('!트위치')) {
    let img = 'https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F4749_000_6%2F20170807153006222_5RVBX5A8M.jpg%2F134724_i1.jpg%3Ftype%3Dw690_fst%26wm%3DN%22&twidth=690&theight=290&opts=17';
    let embed = new Discord.RichEmbed()
    .setTitle(`Uijin's Game status`)
    .setDescription('` Twitch `')
    .setThumbnail(img)
    .setTimestamp()

    message.delete()
    message.channel.send(embed)
  }

  if(message.content.startsWith('!밥')) {
    let img = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20121028_217%2Fkwhart_1351434615267YYqnd_JPEG%2F%25B2%25C9%25B0%25C5%25C1%25F61.jpg&type=sc960_832';
    let embed = new Discord.RichEmbed()
    .setTitle(`Uijin's Game status`)
    .setDescription('` Eating rice `\n3시간 소요')
    .setThumbnail(img)
    .setTimestamp()

    message.delete()
    message.channel.send(embed)
  }

  if(message.content.startsWith('!유튜브')) {
    let img = 'https://post-phinf.pstatic.net/MjAxOTA4MjZfMTg4/MDAxNTY2Nzk0MDMyMjky.j--jk94j_zBbXTK9wqRiW90BgdKIfqlBfoZR4S9V1x0g.ny0wA13z9eR-wOxwYJ30N8W0O7Doo5Ykb74fPcFvgZEg.JPEG/%EC%9C%A0%ED%8A%9C%EB%B8%8C.jpg?type=w1200';
    let embed = new Discord.RichEmbed()
    .setTitle(`Uijin's Game status`)
    .setDescription('` Watch Youtube `')
    .setThumbnail(img)
    .setTimestamp()

    message.delete()
    message.channel.send(embed)
  }



  if(message.content.startsWith('!명령어')) {

    if(message.channel.type != 'dm' && checkPermission(message)) return

    let embed = new Discord.RichEmbed()
    .setTitle(`Uijin's Game Status commands`)
    .setDescription('`!발로란트`\n`!오버워치`\n`!오수`\n`!마크`\n`!트위치`\n`!밥`\n`!유튜브`\n\n명령어들은 `#현우를 위한 의진이의 게임현황`방에 써주시길 바랍니다.')

    message.delete()
    message.author.send(embed)
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
          AutoMsgDelete(message, parseInt(clearLine) + " removed message...");
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