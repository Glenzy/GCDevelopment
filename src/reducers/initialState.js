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
        id:0,
        label:'React',
        angle:8,
        radius:8,
        imgSrc:'../../images/React-icon.svg',
      },
      {
        id:1,
        label:'Redux',
        angle:7,
        radius:7,
        imgSrc:'../../images/Redux-icon.svg',
      },
      {
        id:2,
        label:'Javascript',
        angle:7,
        radius:7,
        imgSrc:'../../images/javascript-logo.svg',
      },
      {
        id:3,
        label:'HTML5',
        angle:8,
        radius:8,
        imgSrc:'../../images/html5-logo.svg',
      },
      {
        id:4,
        label:'CSS3',
        angle:9,
        radius:8,
        imgSrc:'../../images/css3-logo.svg',
      },
      {
        id:5,
        label:'sass',
        angle:9,
        radius:9,
        imgSrc:'../../images/sass-logo.svg',
      },
      {
        id:6,
        label:'Jest Testing',
        angle:2,
        radius:2,
        imgSrc:'../../images/jest-logo.svg',
      },
      {
        id:7,
        label:'RESTful APIs',
        angle:6,
        radius:6,
        imgSrc:'../../images/rest-api-logo.svg',
      },
      {
        id:8,
        label:'Git',
        angle:5,
        radius:5,
        imgSrc:'../../images/Git-logo.svg',
      },
    ],
  }
};
