export default {
  Globals: {
    screenWidth:576,
  },
  Game: {
    gameState: 0,
    hasGameStarted:false,
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
      velocity:{x:3, y:3, lastXchange:new Date(), lastYchange:new Date()}
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
        navigationLink: '/contact',
        active:false,
        name:'Contact',
        classNames:'navbar-link',
      },
    ]
  },
  DevExamples: {
    showExamples:false,
    skills:[
      {
        id:0,
        label:'React',
        angle:10,
        radius:7,
        imgSrc:'../../images/React-icon.svg',
        color:'rgba(118, 217, 251, 1)',
        stopOpacityA:1,
        stopOpacityB:0.8,
        active:true,
        info:'I love the power of React and it\'s flexibility. I\'ve been actively learning and developing React apps for over 2 years. I have a long list of future fun projects (like this one) including an AI Chatbot using AWS Lambda'
      },
      {
        id:1,
        label:'Redux',
        angle:5,
        radius:5,
        imgSrc:'../../images/Redux-icon.svg',
        color:'rgba(109, 70, 169, 1)',
        stopOpacityA:'0.6',
        stopOpacityB:'0.3',
        active:false,
        info:'I have been using Redux for as long as I have been using React - over 2 years. It\'s amazing for it\'s ability to deal with and test apps and inbuilt optimisation with connect\'s PureComponent wrapping '
      },
      {
        id:2,
        label:'Javascript',
        angle:5,
        radius:6,
        imgSrc:'../../images/javascript-logo.svg',
        color:'rgba(247, 223, 31, 1)',
        stopOpacityA:'0.6',
        stopOpacityB:'0.3',
        active:false,
        info:'I love using Javascript, I love learning it. Clearly written code with great, meaningful variable and function names get me pretty excited. '
      },
      {
        id:3,
        label:'HTML5',
        angle:5,
        radius:7,
        imgSrc:'../../images/html5-logo.svg',
        color:'rgba(228, 77, 38, 1)',
        stopOpacityA:'0.6',
        stopOpacityB:'0.3',
        active:false,
        info:'Semantic HTML is a necessity for SEO, screen readers and just as importantly other developers.',
      },
      {
        id:4,
        label:'CSS3',
        angle:5,
        radius:7,
        imgSrc:'../../images/css3-logo.svg',
        color:'rgba(54, 77, 228, 1)',
        stopOpacityA:'0.6',
        stopOpacityB:'0.3',
        active:false,
        info:'Nothing got me more excited than the release of CSS3. I\'m still learning some awesomely creative things with this language from animatins to cool hover effects to optimised end user experiences.'
      },
      {
        id:5,
        label:'Sass',
        angle:5,
        radius:6,
        imgSrc:'../../images/sass-logo.svg',
        color:'rgba(201, 101, 150, 1)',
        stopOpacityA:'0.6',
        stopOpacityB:'0.3',
        active:false,
        info:'I\'ve been using Sass for 5 years now and I love it. I love the mixins, the nested icons that add to it\'s ability to keep code bases modular and organised.'
      },
      {
        id:6,
        label:'Jest',
        angle:5,
        radius:2,
        imgSrc:'../../images/jest-logo.svg',
        color:'rgba(153, 66, 91, 1)',
        active:false,
        info:'My biggest issue with coding anything non-trivial such as this project is regression. GAH!!!! This is an area I\'m actively learning and integrating into this project'
      },
      {
        id:7,
        label:'RESTful',
        angle:5,
        radius:5,
        imgSrc:'../../images/rest-api-logo.svg',
        color:'rgba(57, 102, 170, 1)',
        active:false,
        info:'Where would we be without APIs? As Front-end developers we use these every day.'
      },
      {
        id:8,
        label:'Git',
        angle:5,
        radius:5,
        imgSrc:'../../images/Git-logo.svg',
        color:'rgba(240, 81, 51, 1)',
        stopOpacityA:'0.6',
        stopOpacityB:'0.3',
        active:false,
        info:'Another tool we use every day. When working with other developers, keep your branches short and commit often.'
      },
    ],
  }
};
