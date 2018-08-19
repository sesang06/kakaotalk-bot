var regex = /^!([\S]*)[\s]*([\S]*)/;
const help = "안녕하세요 ! 세상씨가 만든 카카오톡 봇입니다.\n !도움말 : 명령어를 확인합니다. \n !날짜 : 오늘 날짜를 표시합니다. \n !시각 : 지금 시각을 표시합니다. \n !아무말 : 등록된 아무말이나 막 합니다. \n !tmi !투머치 : 투 머치 인포메이션을 아무거나 합니다 ^_^ \n !퇴근요정 , !퇴근 : 퇴근이 얼마나 남았는지 알려드립니다. \n !점심요정, !점심 : 점심시간이 얼마나 남았는지 알려드립니다. \n !오늘뭐먹지, !오늘 : 오늘 점심메뉴를 정해드립니다.  \n 감사합니다! ";
const elseText = "오타가 난 것 같은데요... \n 가능한 키워드는 도움말, 날짜, 시각, 아무말, 투머치, 퇴근요정, 점심요정, 오늘뭐먹지 입니다 ^_^";
const arrayThingArray = [
 "아무말 아무말 대잔치인걸....?",
 "규규갸갹", 
 "호희호희",
 ];
 const tmtArray = [
"TMI는 ‘너무 과한 정보(Too Much Information)’의 줄임말로 SNS상에서 누군가에 대한 지나치게 상세하거나 사적인 정보를 뜻하지 않게 알게 되었을 때 사용하는 인터넷상의 용어이다. 영어권 인터넷에서는 이전부터 사용되었으나 한국에서는 2017년 하반기부터 트위터를 중심으로 사용되기 시작하였다. 그 이전부터 사용되었던 안물안궁과 어느 정도 의미가 통하는 편. "
,"스리마일 섬 원자력 발전소 사고\nThree Mile Island Accident, 줄여서 TMI 사고라고 부르기도 한다.\n1. 개요\n1979년 3월 28일 미국 펜실베이니아 주 미들타운에서 일어난 멜트다운 사고. 국제 원자력 사고 척도로는 시설외까지 위험을 수반한 사고(레벨 5)로, 윈드스케일 화재와 같은 등급이다.\n한국에서도 같은 종류가 가동 중인 가압수형 원자로이다.\n당시 스리마일 섬에는 총 2개의 원자로가 건설되어 있었고 원자로의 유형은 가압수형 원자로였다. 가압수형 원자로의 경우 압력을 가한 물을 원자로 냉각재 및 중성자 감속재로 사용하기 때문에 이 물이 끊임없이 순환되도록 유지하여 끓지 않게 만드는 것이 중요하다. 스리마일 섬 사고의 경우 가장 중요한 급수 시스템에서 문제가 생겼던 것이 원인이다.\n2. 사고 발생과 처리\n사고를 발생시킨 최초원인은 뚜렷하게 밝혀지지는 않았지만, 자정 무렵 발전소 1호기의 핵연료 재충전을 위해 차단조치를 내렸고 여기서부터 꼬이기 시작한 것으로 추정하고 있다. 이 조치로 발전소는 2호기만 가동 중이었고 가동 내내 큰 문제가 없었는데 새벽 4시 무렵 주 급수 펌프가 뻗는 사고가 발생했다. 가압수형 원자로는 물 공급이 중요하기 때문에 주 급수 시스템이 뻗으면 보조장치가 바로 작동하여 위험한 사태를 피할 수 있게 설계되어 있었는데, 최초 보조급수 계통 밸브가 닫혀있었다. 정상시 보조급수 계통이 개방된 채로 가동되어야 하지만 당시 운전원이 개방이 되었는지 닫혀있었는지 알지 못했었다. MCR 내부 보조급수기가 닫혀있는지 열려있는지를 표시해주는 표시등이 표지판 같은 Tag에 가려져 운전원이 확인하지 못했기 때문이다. 그 결과 열려야 할 보조급수계통 밸브가 몇 개는 닫혀있었고, 열리지 말아야할 가압기 압력 방출 밸브가 개방된 상태는 아니었지만 미세한 누출이 있었는데 통제실 콘솔 표시등에는 수치가 정상수치 범위내로 표시되고 있었다. 그리고 이런 상황 속에서 ECCS, 비상 노심 냉각 시스템이 가동되어 원자로를 식히고 있었는데 이걸 정상이라고 판단한 운전원은 ECCS를 버리게 된다.\n당시 원자로 내 냉각수는 실제로는 줄어들고 있었지만, 계측기에는 냉각수 수위가 올라가는 것으로 표기되고 있었다. 정상상태에서 고압인 원자로 내 압력이 가압기 압력방출밸브의 미세한 누설로 압력이 빠지고 있었고, 압력이 떨어진 액체 상태의 물은 기체상태로 변하는 현상이 발생하므로 냉각수가 끓어오르고 있었다. 즉 액체와 기체 혼합물, 쉽게 말해 거품이 위로 부글부글 끓어오르고 있었는데 당시에 설치되어 있던 노심 수위 계측기는 이 거품을 판단할 방법이 없었다. 그 결과 압력이 떨어지는데도 수위는 올라간 것으로 계측되었고,[1] 운전원의 관점에서는 냉각수의 수위가 상승하고 있는 상황에서 비상 냉각수를 공급하면 안되므로 당연히 ECCS를 끌 수밖에 없었던 상황이었다. 운전원 교육에서는 가압기 내의 냉각수 수위는 절반을 유지하도록 메뉴얼에 지정되어있으며 해당 수위가 가득차게 운전하지 않도록 교육했다.\n결국 최후의 보루인 ECCS마저 꺼져버리자 증기압력이 증가하여 파이프가 파손되고 원자로의 냉각수가 유출되기 시작했다. 게다가 원자로 온도가 치솟아 원자로 노심이 녹기 시작하면서 방사능 수치가 급상승하였다. 관계자들이 원인 파악을 못하고 우왕좌왕하는 사이 원자로 방호장비가 녹아 최악의 상황 직전까지 갔으나 16시간 만에 간신히 사고의 원인을 파악할 수 있었다. 천만다행으로 교대하는 운전원이 가압기 압력방출 밸브의 미세누설을 발견하고 보조 급수 펌프의 자동기동으로 변경하면서 최악의 사태는 모면할 수 있었다. 결국 수동으로 조작하여 밸브를 닫고 냉각 펌프를 작동시킨 후에야 간신히 사태를 진정시킬 수 있었다.\n원인 파악이 늦어지는 바람에 노심의 절반 이상이 녹았다. 하지만 원자로가 파괴되거나 붕괴되는 사태는 모면하여 인명피해도 없었고 미국 본토에 방사능 낙진이 떨어지는 최악의 상황은 피할 수 있었지만 발전소 하나를 시원하게 말아먹었다. 더불어 당시 1호기는 고장이 없었는데 2호기에서 사고가 나는 바람에 나란히 가동중지 조치가 내려졌으며 2호기는 1980년대 말까지 정화작업을 해야만 했다."
,"다람쥐 헌 쳇바퀴에 타고파",
"첫 흙 담은 팥쥐 컵",
"키스의 고유 조건은 입술끼리 만나야 하고 특별한 기술은 필요치 않다.",
"The quick brown fox jumps over a(the) lazy dog. (날쌘 갈색 여우가 게으른 개를 뛰어넘는다.-Microsoft Windows 글꼴 보기 문장)"
,"いろはにほへど / ちりぬるを / わがよたれぞ / つねならむ / うゐのおくやま / けふこえて / あさきゆめみじ / ゑひもせず (아름다운 꽃도 언젠가는 져버리거늘 우리가 사는 이 세상 누군들 영원하리 덧없는 인생의 깊은 산을 오늘도 넘어가노니 헛된 꿈 꾸지 않으리 취하지도 않을 테오 - 이로하 노래)",
"바람이 빠르며 하늘이 높고 원숭이의 휘파람이 슬프니 \n물가가 맑고 모래 흰 곳에 새가 돌아오는구나.\n끝없이 지는 나뭇잎은 쓸쓸히 떨어지고\n끝없는 장강은 도도하게 흐른다.\n만 리에 가을을 슬퍼하여 늘 나그네가 되니\n한평생 많은 병에 혼자 대에 오른다.\n온갖 고통에 서리 같은 귀밑머리가 많음을 슬퍼하니\n늙고 초췌함이 흐린 술잔을 새로 멈추었노라.",
]
const menuArray = [
    "한솥",
    "칼국수",
    "카레",
    "파파이스",
    "초밥",
    "쌀국수",
]
function response(room, msg, sender, isGroupChat, replier, imageDB) {
    /** @param {String} room - 방 이름
      * @param {String} msg - 메세지 내용
      * @param {String} sender - 발신자 이름
      * @param {Boolean} isGroupChat - 단체채팅 여부
      * @param {Object} replier - 세션 캐싱 답장 메소드 객체
      * @param {Object} imageDB - 프로필 이미지와 수신된 이미지 캐싱 객체
      * @method imageDB.getImage() - 수신된 이미지가 있을 경우 Base64 인코딩 되어있는 JPEG 이미지 반환, 기본 값 null
      * @method imageDB.getProfileImage() - Base64 인코딩 되어있는 JPEG 프로필 이미지 반환, 기본 값 null
      * @method replier.reply("문자열") - 메시지가 도착한 방에 답장을 보내는 메소드 */
    
        const res = msg.match(regex);
        if (res != null){
            if (res.length >= 3){
                const command = res[1];
                const argument = res[2];
                parseCommand(command,argument, sender ,replier);
            }
        }
   
    
}
function parseCommand(command, argument, sender, replier){
    /** @param {String} command - 방 이름
      * @param {String} argument - 메세지 내용 */
     switch(command){
         case "help":
         case "도움말":
         showHelp(replier);
         break;
         case "날짜":
         showDate(replier);
         break;
         case "시각":
         showTime(replier);
         break;
         case "아무말":
         showAnyThing(replier);
         break;
         case "tmt":
         case "tmi":
         case "투머치":
         showToomuch(replier);
         break;
         case "퇴근요정":
         case "퇴근":
         showOffWork(replier);
         break;
         case "점심요정":
         case "점심":
         showLunchTime(replier);
         break;
         case "오늘뭐먹지":
         case "오늘":
         case "오늘모먹지":
         case "모먹지":
         case "메뉴":
         case "오늘메뉴":
         showMenu(replier);
         break;
         default:
         showElse(replier);
         break;
     }
}
function showLunchTime(replier){
    var currentDate = new Date();
    var offWorkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 12, 00);
    var time = (offWorkDate - currentDate) / 1000;

    var hours = Math.floor(time / 3600);
    time -= hours * 3600;

    var minutes = Math.floor(time / 60);
    time -= minutes * 60;

    var seconds = parseInt(time % 60, 10);
    const reply = hours+"시간 "+minutes+"분 "+seconds+"초 후 점심시간입니다!";   
    replier.reply(reply);
}
function showOffWork(replier){
    var currentDate = new Date();
    var offWorkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 18, 00);
    var time = (offWorkDate - currentDate) / 1000;

    var hours = Math.floor(time / 3600);
    time -= hours * 3600;

    var minutes = Math.floor(time / 60);
    time -= minutes * 60;

    var seconds = parseInt(time % 60, 10);
    const reply = hours+"시간 "+minutes+"분 "+seconds+"초 후 퇴근하시면 됩니다!";   
    replier.reply(reply);
}
var _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(currentDate, leaveWorkDate) {
    var time = (leaveWorkDate - currentDate) / 1000;

    // Discard the time and time-zone information.
    var dates = Math.floor(time / 86400)
    time -= dates * 86400;

    var hours = Math.floor(time / 3600);
    time -= hours * 3600;

    var minutes = Math.floor(time / 60);
    time -= minutes * 60;

    var seconds = parseInt(time % 60, 10);
    const reply =  dates+ "일 "+hours+"시간 "+minutes+"분 "+seconds+"초";   
   
    return reply;
}
function showElse(replier){
    replier.reply(elseText);
}
function showHelp(replier){
    replier.reply(help);
}
function showDate(replier){
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    const reply = "지금 날짜는 "+year+"년 "+month+"월 "+day+"일 입니다! ^_^";
    replier.reply(reply);


}
function showTime(replier){
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds(); 
    const reply = "지금 시각은 "+year+"년 "+month+"월 "+day+"일 "+hours+"시 "+minutes+"분 "+seconds+"초 입니다! ^_^";
    replier.reply(reply);
}
function showAnyThing(replier){
    const reply = arrayThingArray[Math.floor(Math.random() * arrayThingArray.length)];
    replier.reply(reply);
}
function showToomuch(replier){
  const reply = tmtArray[Math.floor(Math.random() * tmtArray.length)];
    replier.reply(reply);
}
function showMenu(replier){
    const reply = menuArray[Math.floor(Math.random() * menuArray.length)];
    replier.reply(reply);
}