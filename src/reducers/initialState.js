export default {
  Globals: {
    screenWidth:576,
  },
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
        angle:5,
        radius:6,
        imgSrc:'../../images/React-icon.svg',
        color:'rgba(97, 217, 251, 1)',
        hovered:false,
      },
      {
        id:1,
        label:'Redux',
        angle:5,
        radius:5,
        imgSrc:'../../images/Redux-icon.svg',
        color:'rgba(109, 70, 169, 1)',
        hovered:false,
      },
      {
        id:2,
        label:'Javascript',
        angle:5,
        radius:6,
        imgSrc:'../../images/javascript-logo.svg',
        color:'rgba(247, 223, 31, 1)',
        hovered:false,
      },
      {
        id:3,
        label:'HTML5',
        angle:5,
        radius:6,
        imgSrc:'../../images/html5-logo.svg',
        color:'rgba(228, 77, 38, 1)',
        hovered:false,
      },
      {
        id:4,
        label:'CSS3',
        angle:5,
        radius:6,
        imgSrc:'../../images/css3-logo.svg',
        color:'rgba(54, 77, 228, 1)',
        hovered:false,
      },
      {
        id:5,
        label:'Sass',
        angle:5,
        radius:4,
        imgSrc:'../../images/sass-logo.svg',
        color:'rgba(201, 101, 150, 1)',
        hovered:false,
      },
      {
        id:6,
        label:'Jest',
        angle:5,
        radius:2,
        imgSrc:'../../images/jest-logo.svg',
        color:'rgba(153, 66, 91, 1)',
        hovered:false,
      },
      {
        id:7,
        label:'RESTful',
        angle:5,
        radius:5,
        imgSrc:'../../images/rest-api-logo.svg',
        color:'rgba(57, 102, 170, 1)',
        hovered:false,
      },
      {
        id:8,
        label:'Git',
        angle:5,
        radius:5,
        imgSrc:'../../images/Git-logo.svg',
        color:'rgba(240, 81, 51, 1)',
        hovered:false,
      },
    ],
    RadiaGraph: {
       hoveredSection: false,
    }
  }
};
