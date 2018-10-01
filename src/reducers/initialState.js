export default {
  Game: {
    gameState: 0,
    gameBoard:{},
    enemies:[
        {
        id:0,
        x:200,
        y:110,
        width:50,
        height:50,
        velocity:{x:1, y:1}
      },
        {
        id:1,
        x:260,
        y:170,
        width:50,
        height:50,
        velocity:{x:-1, y:1}
      }
    ],
    enemy: {
      id:0,
      x:200,
      y:110,
      width:50,
      height:50,
      velocity:{x:1, y:1}
    },
    enemyCount:0,
    maxEnemies:2,
    lastEnemyCreated:new Date(),
    player: {
      isAlive:true,
      score:0,
      x:0,
      y:0,
      width:50,
      height:50,
      velocity:{x:1, y:1},
      lives:1,
    },
    bullet: {
      isAlive:false,
      x:0,
      y:0,
      width:10,
      height:10,
    },
    explosion: {
      isAlive:false,
      x:0,
      y:0,
    },
    topScores:{
      showScores:false,
      scores:[],
    }
  },
  Menu: {
    open:false,
    links:[
      {
        id:0,
        title:'GCDevelopment welcome screen',
        navigationLink: '/',
        active:true,
        name:'Home',
        classNames:'navbar-link',
      },
      {
        id:1,
        title:'Learn about my skills',
        navigationLink: '/development',
        active:false,
        name:'Skills',
        classNames:'navbar-link',
      },
      {
        id:2,
        title:'Contact me',
        navigationLink: '/hire-me',
        active:false,
        name:'Hire me',
        classNames:'navbar-link',
      },
    ]
  },
  DevExamples: {
    skills:[
       {
        id:'react',
        name:'React',
        level:8,
        imgSrc:'../../images/React-icon.svg',
      },
      {
        id:'redux',
        name:'Redux',
        level:8,
        imgSrc:'../../images/Redux-icon.svg',
      },
      {
        id:'javascript',
        name:'Javascript',
        level:8,
        imgSrc:'../../images/javascript-logo.svg',
      },
      {
        id:'html5',
        name:'HTML5',
        level:9,
        imgSrc:'../../images/html5-logo.svg',
      },
      {
        id:'css3',
        name:'CSS3',
        level:9,
        imgSrc:'../../images/css3-logo.svg',
      },
      {
        id:'sass',
        name:'sass',
        level:9,
        imgSrc:'../../images/sass-logo.svg',
      },
      {
        id:'jest',
        name:'Jest Testing',
        level:6,
        imgSrc:'../../images/jest-logo.svg',
      },
      {
        id:'restful',
        name:'RESTful APIs',
        level:8,
        imgSrc:'../../images/rest-api-logo.svg',
      },
      {
        id:'git',
        name:'Git',
        level:6,
        imgSrc:'../../images/Git-logo.svg',
      },
    ],
  }
};
