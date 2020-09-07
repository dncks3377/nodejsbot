const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '안녕') {
    return message.reply('안녕 !');
  }

  if(message.content == 'd 짱구') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**```📖 information```**')
      .setImage(URL='https://w.namu.la/s/34910bc88267bbc1eebd655387abc7749e65f430783b93070e8446cbee528d2c364bdba15c25f53532d8e07e939d58a5cd23acb6977a4b7fa69d38773b99be1b570615607af6becb6efbd908911da0c0c1cab04d0e3e40043d0daac3f90b582b')
      .setDescription('● [신짱구/노하라 신노스케](https://namu.wiki/w/%EB%85%B8%ED%95%98%EB%9D%BC%20%EC%8B%A0%EB%85%B8%EC%8A%A4%EC%BC%80):\n별도의 수식어 필요없이 ` 짱구 `라 하면 대다수가 이 캐릭터를 가리킨다')
      .setColor('#00ff04')

    message.channel.send(embed)
  }

  if(message.content == 'd 도라에몽') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**도라에몽의 정보**')
      .setDescription('● [도라에몽](https://namu.wiki/w/%EB%8F%84%EB%9D%BC%EC%97%90%EB%AA%BD):\n도라에몽[2]은 일본의 SF 만화[3]이다. 작가는 후지코 F. 후지오로 도라에몽은 그의 대표작이다.')
      .addBlankField()
      .setImage(URL='https://namu.wiki/w/%ED%8C%8C%EC%9D%BC:x9788925291178.jpg')
      .setFooter('공식사이트', img, 'https://dora-world.com/')
      .setColor('#00ff04')

    message.channel.send(embed)
  }

  if(message.content == '/패치') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('`태일아 토크온` 명령어가 업데이트 되었습니다')
      .setColor('#00ff04')
    message.channel.send(embed)
  }

  if(message.content == 'd 토크온') {
    let img = '';
      let embed = new Discord.RichEmbed()
        .setTitle('**토크온 하는 오현수**')
        .setURL('https://streamable.com/jk9sn6')
        .setColor('#00ff04')
      message.channel.send(embed)
    }

  if(message.content == 'd 마크') {
    let img = '';
      let embed = new Discord.RichEmbed()
        .setTitle('**MINECRAFT**')
        .setURL('https://drive.google.com/file/d/12ihoTzkBe4wRw0HvxZBGqAmnxwb6Cmj0/view?usp=sharing')
        .setColor('#00ff04')
      message.channel.send(embed)
    }

  if(message.content == 'd 마크주소') {
  let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**222.110.204.237**')
      .setColor('#00ff04')
    message.channel.send(embed)
  }


  if(message.content == 'd 동영상') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**오현수의 마크 일대기**')
      .setURL('https://youtu.be/CPFTMF5Paho')
      .setColor('#00ff04')
    message.channel.send(embed)
  }

  if(message.content == 'd 오버워치패치법') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**```C# 기반 소스 디텍 패치법 소스를 열고나서 Assembly 에 들어간다. 거기서 UUID 에셈블리네임 및 등을 수정. UUID는 https://wepplication.github.io/tools/uuidGen/?isUpperCase=false 여기서 생성후 수정```**')
      .setColor('#00ff04')

    message.channel.send(embed)
  }

  if(message.content == 'd 안녕') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**나도 반가워 흫에헿헤ㅔ헤**')
      .setColor('#00ff04')

    message.channel.send(embed)
  }

  if(message.content == 'd 울지마') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**고마워 선물로 내가 입던 팬티줄게...**')
      .setColor('#00ff04')

    message.channel.send(embed)
  }

  if(message.content == 'd 쟤가 나 놀려') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**이 시발년아 내친구가 만만해!!!!**')
      .setColor('#00ff04')

    message.channel.send(embed)
  }

  if(message.content == 'd 애니') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**누가 2D보고 딸딸이 치냐**')
      .setColor('#00ff04')
    message.channel.send(embed)
  }

  if(message.content == 'd 백재민') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**백재민님의 정보**')
      .setDescription('```● 출생지 [서울특별시 구파발 907동 미지수]\n● 외동\n● 서울대성고등학교 1학년 6반 백재민\n● 오현수 담당 일찐 [익명제보]```')
      .setImage(URL='https://namu.wiki/w/%ED%8C%8C%EC%9D%BC:%EC%82%AC%ED%9A%8C%EB%B3%B5%EB%AC%B4%EC%9A%94%EC%9B%90%EC%A0%9C%EB%B3%B52017.jpg')
      .setColor('#00ff04')
    message.channel.send(embed)
  }

  if(message.content == 'd 오현수') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**오현수님의 정보**')
      .setDescription('```● 출생지 [서울특별시 은평구 갈현동 연신내역 1번출구]\n● 3남중 막내\n● 성동공업고등학교 1학년 10반 18번 오현수\n● 부모님 홀수 [익명제보]\n● 고추 3cm 남자```')
      .setImage(URL='https://i.postimg.cc/RFRnmPtg/errt.png')
      .setColor('#00ff04')
    message.channel.send(embed)
  }

  if(message.content == 'd 최현우') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**최현우님의 정보**')
      .setDescription('```● 출생지 [경기도 미지수]\n● 2남중 첫째\n● 마인크래프트 배드워즈 장인\n● 동생에게 라면끓여오라고 한 장본인\n● 120kg의 거구```')
      .setImage(URL='https://w.namu.la/s/8484980a8438ab19304d44feedae0b556522375dba855132f50ca51d44dedb2e343d758b58ef5da409b9dd241c11ba0756455e3a731c9b7709553a92c767ac4cc316e9f5f7b5950080229ce6ef01b7a5b296ccfe6b6c3675ad35a8024f30f62c')
      .setColor('#00ff04')
    message.channel.send(embed)
 }


  if(message.content == 'd 정보') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**앞에 d 을 붙여야 봇이 작동합니다**')
      
      .setURL('')
      .setAuthor('', img, 'http://www.naver.com')
      .setColor('#00ff04')
      .setThumbnail(img)
      .addBlankField()
      .addField('**```d 안녕```**', '봇이 대답해줍니다.')
      .addBlankField()
      .addField('**```d 오현수```**', '오현수의 정보를 보여줍니다.')
      .addBlankField()
      .addField('**```d 백재민```**', '백재민의 정보를 보여줍니다.')
      .addBlankField()
      .addField('**```d 짱구```**', '짱구의 정보를 보여줍니다')
      .addBlankField()
      .addField('**```d 울지마```**', '태일이가 선물을 줍니다')
      .addBlankField()
      .addField('**```d 안녕```**', '태일이가 대답해줍니다')
      .addBlankField()
      .addField('**```d 쟤가 나 놀려```**', '태일이가 맞써 싸워줍니다')
      .addBlankField()
      .addField('**```d 오버워치패치법```**', '척척박사태일이가 오버워치 디텍 패치법을 알려줍니다')
      .addBlankField()
      .addField('**```d 동영상```**', '오현수의 마크일대기 영상주소를 올려줍니다')
      .addBlankField()
      .addField('**```d 마크주소```**', '마인크래프트 주소를 알려줍니다')
      .addBlankField()
      .addField('**```d 마크```**', '태일이가 마인크래프트 다운로드 주소를 줍니다')
      .addBlankField()
      .addField('**```d 토크온```**', '토크온 하는 오현수의 영상을 보여줍니다')
      .addBlankField()

    message.channel.send(embed)
  } 

  if(message.content == 'd 정보2') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('**앞에 d 을 붙여야 봇이 작동합니다**')
      
      .setURL('')
      .setAuthor('', img, 'http://www.naver.com')
      .setColor('#00ff04')
      .setThumbnail(img)
      .addBlankField()
      .addField('**```d 최현우```**', '최현우의 정보를 보여줍니다.')
      .addBlankField()
      .addField('**```d 도라에몽```**', '도라에몽의 정보를 보여줍니다.')
      .addBlankField()
      .setFooter('', img)

    message.channel.send(embed)
  } 

  if(message.content.startsWith('!전체공지')) {
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
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
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


client.login(token);