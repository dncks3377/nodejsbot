const Discord = require('discord.js');
const client = new Discord.Client();
const sqlite3 = require('sqlite3')
const token = process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '발로란트' }, status: 'online' })

  let state_list = [
    '발로란트',
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





  client.on('message', message => {
    if (message.content.startsWith('~정보')) {
      if(message.channel.type == 'dm') {
      let contents = message.content.slice('~정보'.length);
      client.channels.get("759250826328932352").send({embed: new Discord.RichEmbed().setColor("#FFFFFF").setAuthor("⚠️ Warning !").setDescription(`<@${message.author.id}>님께서 정보를 입력하셨습니다.\n\n**${contents}**`)});
    };
    if(message.channel.type == 'dm') {

    let embed2 = new Discord.RichEmbed()
    .setDescription("`정보 내용이 전달되었습니다.`")

    message.author.send(embed2)
    }
  }
  });


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

  if(message.content.startsWith('#v 반응속도')) {
    let embed = new Discord.RichEmbed()
    .setDescription(`**<@${message.author.id}>님의 검색\n\n[ 반응속도 테스트 ](https://valog.gg/reaction)**`)
    .setColor("#00d0ff")

    message.channel.send(embed)
}

  if(message.content.startsWith('#v 감도계산기')) {
    let embed = new Discord.RichEmbed()
    .setDescription(`**<@${message.author.id}>님의 검색\n\n[ 감도 계산기](https://valog.gg/calculator)**`)
    .setColor("#00d0ff")

    message.channel.send(embed)
  }

  if(message.content.startsWith('#v 용어')) {
    let embed = new Discord.RichEmbed()
    .setDescription('**```css\n[ 용어의 길이가 길어 DM으로 보내드립니다. ]\n```**\n\n**디퓨즈(Defuse)**\nㅣ 스파이크를 해체하는 행위\n\n**램프(Ramp)**\nㅣ 경사가 있는 길, 경사로, 바인드 맵의 A사이트 램프의 경우 램프 등(Lamp)이 있기에 램프(Lamp)라고 불림.\n\n**러쉬(Rush)**\nㅣ 팀원 모두가 한꺼번에 목적 지역에 공격하러 빠르게 들어가는 것\n\n**롱(Long)**\nㅣ 사이트에서 이어지는 긴 길\n\n**메인(Main)**\nㅣ 상대가 들어오는 가장 큰 입구')
    .setColor("#00d0ff")

    message.author.send(embed)

    let embed2 = new Discord.RichEmbed()
    .setDescription('**무결점 플레이**\nㅣ 팀원 모두가 죽지 않고 라운드 승리\n\n**미드(Mid)**\nㅣ 맵의 중앙 구역\n\n**버니합(Bunny Hop)**\nㅣ 토끼뜀이라는 뜻으로 하프라이프 기반 게임 한정으로 점프 시 가속이 붙는 것을 이용한 무한 가속 글리치(일종의 버그). 하지만 발로란트 내에서는 가속이 붙지 않음.\n\n**베이스(Base)**\nㅣ 각 팀 별 소환되는 첫 시작 장소 (=스폰)\n\n**브레이킹(Breaking)**\nㅣ 반동을 최소화 하기 위하여 움직임을 멈추고 쏘는 것. 초보자가 마스터하면 결과가 좋음')
    .setColor("#00d0ff")

    message.author.send(embed2)

    let embed3 = new Discord.RichEmbed()
    .setDescription('**사이트(Site)**\nㅣ 스파이크를 설치하는 장소\n\n**세이브(Save)**\nㅣ 적에게 죽어서 총을 잃어버리지 말고 숨어서 총을 보존하라는 뜻\n\n**숏(Short)**\nㅣ 사이트에서 이어지는 짧은 길\n\n**스모크(Smoke)**\nㅣ 연막류 장비 혹은 스킬을 일컫는 용어\n\n**에이스(Ace)**\nㅣ 혼자 모든 적을 처치 했을 때\n\n**에코(Eco)**\nㅣ 이번 라운드에 돈을 아끼고 다음 라운드에 총을 사자는 뜻\n\n**엔트리(Entry)**\nㅣ 제일 앞장서서 가는 플레이어')
    .setColor("#00d0ff")

    message.author.send(embed3)

    let embed4 = new Discord.RichEmbed()
    .setDescription('**오퍼**\nㅣ 오퍼레이터(Operator)의 줄임말\n\n**오픈설**\nㅣ 사이트 내 개방된 지역에 스파이크를 설치하자(혹은 했다)는 뜻. 설치 후 사각지대에 숨었다가 해체하는 적을 견제하기 위함\n\n**월샷(Wall shot)**\nㅣ 발로란트는 일부 FPS 게임과 다르게 총알이 벽을 관통 가능한데, 이를 월샷 또는 월뱅(영어권)이라고 부름\n\n**윈도우(Window)**\nㅣ 작게 열린 통로 혹은 창문처럼 턱이 있는 방 또는 구멍\n\n**클러치(Clutch)**\nㅣ 혼자 남은 플레이어가 남은 적들을 모두 처치하여 라운드를 승리로 이끌었을 때')
    .setColor("#00d0ff")

    message.author.send(embed4)

    let embed5 = new Discord.RichEmbed()
    .setDescription('**피킹(Peek)**\nㅣ 살짝 내다보는 행위\n\n**헤븐(Heaven)**\nㅣ 높은 위치의 난간, `2층`과 의미가 같음\n\n**플랭킹(Flanking)**\nㅣ Flank란 옆구리를 뜻하는 단어로써 뒤로 돌아 상대방의 후면, 측면을 공격하는 것\n\n**씨티(Ct)**\nㅣ 사이트와 연결 된 모든 통로를 일컫는 말')
    .setColor("#00d0ff")

    message.author.send(embed5)
  }

  if(message.content.startsWith('#명령어')) {
    if(message.channel.type == 'dm') {
        return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
      }
      if(message.channel.type != 'dm' && checkPermission(message)) return

      let embed = new Discord.RichEmbed()
      .setDescription("**#등급신청 [현재 게임 티어]**\nㅣ #등급신청000 방에 명령어 사용\n\n**#v 반응속도**\nㅣ 반응속도 테스트 사이트\n\n**#v 감도계산기**\nㅣ 타 게임 감도 변환해주는 사이트\n\n**#v 용어**\nㅣ 발로란트 용어 사전\n\n**#v 제트**\nㅣ 제트에 관한 내용\n\n**#v 피닉스**\nㅣ 피닉스에 관한 내용")
      .setColor("#00d0ff")

      message.channel.send(embed)
  }

  if(message.content.startsWith('안녕')) {
     let embed = new Discord.RichEmbed()
     .setDescription(`<@${message.author.id}> ` + '님! 안녕하세요 !')

     message.channel.send(embed)
  }

  if(message.content.startsWith('#등급신청')) {
    let contents = message.content.slice('!등급신청'.length);

    let embed = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}>님의 신청하신 내용\n===========================\n ${contents}`)
    .setAuthor("등급신청이 완료되었습니다 !")
    .setColor("#00d0ff")

    message.delete()
    message.channel.send(embed)

    let embed2 = new Discord.RichEmbed()
    .setTitle("**Warning !**")
    .setDescription("소요시간은 1분 - 3시간 사이입니다.")
    .setColor("#00d0ff")

    message.author.send(embed2)
  }


  if(message.content == '~인증') {
    message.react('⚠️').then(
      message.author.send("`~정보 [자신의 정보]`를 입력 하십시오.")
    )
  }

  if(message.content.startsWith('~정보')) {
    if(message.channel.type == 'dm') { 

      let contents = message.content.slice('~정보'.length);

      let embed = new Discord.RichEmbed()
      .setDescription('**✅ Successfully**\n`정보 내용이 전달되었습니다.`라는 문구가\n뜨지 않으시면 다시 입력바랍니다.\n\n※ 인증되시기까지 1분 ~ 24시간이 소요되실 수 있습니다.')

      message.channel.send(embed)
    }
  }
    




  if(message.content.startsWith('#v 제트')) {
    let embed = new Discord.RichEmbed()
    .setTitle('제트 [Jett]')
    .setDescription("**국적**: 대한민국\n**역할**: 타격대\n\n한국 출신으로 신속하고 은밀하게 움직이는 제트는 다른 사람이라면 엄두도 못 낼 위험한 일도 마다하지 않습니다.\n교전이 벌어질 때면 어김없이 상대보다 뛰어난 능력을 통해 기습적으로 공격합니다.\n\n**스킬 종류**\n`상승기류 (Q)` - [video](https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4)\n`순풍 (E)` - [video](https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4)\n`연막 폭발 (C)` - [video](https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4)\n`칼날 폭풍 (X)` - [video](https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4)\n\n[ 플레이스타일 ](https://www.youtube.com/watch?v=ltUq4dCcy18&feature=youtu.be)")
    .setFooter("https://www.youtube.com/watch?v=ltUq4dCcy18&feature=youtu.be")
    .setColor("#00d0ff")

    message.author.send(embed)
  }

  if(message.content.startsWith('#v 피닉스')) {
    let embed = new Discord.RichEmbed()
    .setTitle('피닉스 [Phoenix]')
    .setDescription("**국적**: 영국\n**역할**: 타격대\n\n영국 출신 피닉스의 탁월한 능력은 전장을 섬광탄과 불꽃으로 수놓는 전투 스타일에서 비롯됩니다.\n팀의 지원이 있든 없든 피닉스는 자신만의 방식으로 전투를 이끌어갑니다.\n\n**스킬 종류**\n`커브볼 (Q)` - [video](https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad7b0ea9be090042/5ecad82c2f5c7259287654ff/Phoenix_Q_v001_web.mp4)\n`뜨거운 손 (E)` - [video](https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318f7ee7d6435fac/5ecad82cf5bd13348a6cac7d/Phoenix_E_v001_web.mp4)\n`불길 (C)` - [video](https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0ee7c9d84985ecf/5ecad82d957e405e09905751/Phoenix_C_v001_web.mp4)\n`역습 (X)` - [video](https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt50beaed6524c3219/5ecad82bc846021917ecbb89/Phoenix_X_v001_web.mp4)\n\n[ 플레이스타일 ](https://www.youtube.com/watch?v=3S_7zvUWBKE&feature=youtu.be)")
    .setColor("#00d0ff")

    message.author.send(embed)
  }



  
  
  if(message.content == '-ping') {
    return message.reply(client.ping + ' **pong**');
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




  if(message.content.startsWith('9명령어')) {

    if(message.channel.type != 'dm' && checkPermission(message)) return

    let embed = new Discord.RichEmbed()
    .setTitle(`Uijin's Game Status commands`)
    .setDescription('`!발로란트`\n`!오버워치`\n`!오수`\n`!마크`\n`!트위치`\n`!밥`\n\n명령어들은 `#현우를 위한 의진이의 게임현황`방에 써주시길 바랍니다.')

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
