import PropTypes from 'prop-types';

const { shape, number, instanceOf, objectOf, string, bool, func, arrayOf } = PropTypes;
export const gameContainerPropTypes = {
    ...gamePropTypes,
}
export const gamePropTypes = {
    handleClickEvent: func.isRequired,
    Game: shape({
      enemy: shape({
        id: number.isRequired,
        x: number.isRequired,
        y: number.isRequired,
        velocity: shape({
          x: number.isRequired,
          y: number.isRequired,
          lastXchange: instanceOf(Date).isRequired,
          lastYchange: instanceOf(Date).isRequired,
        }).isRequired,
      }).isRequired,
      player: shape({
        score: number.isRequired,
        x: number.isRequired,
        y: number.isRequired,
        velocity: objectOf(number).isRequired,
        lives: number.isRequired,
      }).isRequired,
  }).isRequired,
  };

  export const bulletPropTypes = {
      style:string.isRequired,
  };

  export const bulletImagePropTypes  = {
    cssClassName: string.isRequired,
    style: string.isRequired,
  };

  export const enemyCharacterPropTypes = {
    id: number.isRequired,
    style: string.isRequired,
  };

  export const gameLoopPropTypes = {
    handleClickEvent: func.isRequired,
    Game: shape({
      enemy: shape({
        id: number.isRequired,
        x: number.isRequired,
        y: number.isRequired,
        velocity: shape({
          x: number.isRequired,
          y: number.isRequired,
          lastXchange: instanceOf(Date).isRequired,
          lastYchange: instanceOf(Date).isRequired,
        }).isRequired,
      }).isRequired,
      player: shape({
        score: number.isRequired,
        x: number.isRequired,
        y: number.isRequired,
        velocity: objectOf(number).isRequired,
        isAlive: bool.isRequired,
      }).isRequired,
      bullet: shape({
        isAlive:bool.isRequired,
        positionX: number.isRequired,
        positionY: number.isRequired,
      }).isRequired,
      explosion:shape({
        isAlive:bool.isRequired,
        x: number.isRequired,
        y: number.isRequired,
      }).isRequired,
  }).isRequired,
  };

  export const gameOverPropTypes = {
    handleClickEvent :  func.isRequired,
    score:string.isRequired,
    topScores: shape({
      showScores: bool.isRequired,
      scores: arrayOf(string).isRequired,
    })
  };
  export const hudPropTypes = {
    score:string.isRequired,
    handleClickEvent: func.isRequired,
  };

  export const playerCharacterPropTypes = {
    style: string.isRequired,
  };

  export const topScoresPropTypes = {
    scores: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  export const playerPropTypes = {
    player: PropTypes.shape({
      score: PropTypes.number.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      velocity: PropTypes.objectOf(PropTypes.number).isRequired,
      lives: PropTypes.number.isRequired,
    }).isRequired,
  };

  export const scorePropTypes = {
    score: PropTypes.number.isRequired,
  };

  export const gameIntroPropTypes = {
    handleClickEvent :  PropTypes.func.isRequired,
  };

  export const enemyPropTypes = {
    enemy: PropTypes.shape({
      id: PropTypes.number.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      velocity: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        lastXchange: PropTypes.instanceOf(Date).isRequired,
        lastYchange: PropTypes.instanceOf(Date).isRequired,
      }).isRequired,
    }).isRequired
  };