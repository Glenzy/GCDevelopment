import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Stage, World} from 'react-game-kit';
import Swipeable from 'react-swipeable';
import * as gameFunctions from '../../utils/gameFunctions';
import Enemy from './Enemy';
import Player from './Player';
import BulletImage from './BulletImage';
import Explosion from './Explosion';
import Hud from './Hud';
class GameLoop extends Component {
  static contextTypes = {
    loop: PropTypes.object
  };
  constructor(props, context) {
    super(props, context);
    this.enemyRef = React.createRef();
    this.playerRef = React.createRef();
    this.update = this.update.bind(this);
    this.playerCurrentXPosition = this.props.player.x;
    this.playerCurrentYPosition =  this.props.player.y;
    this.bulletCurrentYPosition =  this.props.player.y;
    this.enemyCurrentXPosition = this.props.enemy.x;
    this.enemyCurrentYPosition =  this.props.enemy.y;
    this.explosionState = 0;
    this.explosionStep = 0;
  }
  componentDidMount() {
    this.context.loop.subscribe(this.update);
  }
  componentWillUnmount() {
      this.context.loop.unsubscribe(this.update);
  }
  onSwiped = (direction) =>{
    let x = 0;
    let y = 0;
    if (direction === 'LEFT') {
      x = -1;
    } else if (direction === 'RIGHT') {
      x = 1;
    }
    if (direction === 'UP') {
      y = -1;
    } else if (direction === 'DOWN') {
      y = 1;
    }
    return this.props.actions.changeVelocity(x, y);
  }

  fireBullet = () => {
    if(!this.props.bullet.isAlive){
      return this.props.actions.fireBullet(this.props.player.x, this.props.gameBoard.height-50);
    }
  }
  enemyChangeDirection = (wallHit) => {
    let velocityX;
    let velocityY;
    let lastXchange = this.props.enemy.velocity.lastXchange;
    let lastYchange = this.props.enemy.velocity.lastYchange;
    if(wallHit === 'right'){
      if(this.props.enemy.velocity.x >= 0 && gameFunctions.checkTimeDifference(lastXchange) > 5000){
        velocityX = gameFunctions.getRandomInt(-3, -1);
        velocityY = gameFunctions.getRandomInt(-3, 3);
        lastXchange = new Date();
        return this.props.actions.changeEnemyDirection(this.id, velocityX, velocityY, lastXchange, lastYchange);
      } else {
        return;
      }
    } else if(wallHit ==='left'){
      if(this.props.enemy.velocity.x <= 0 && gameFunctions.checkTimeDifference(lastXchange) > 5000){
        velocityX = gameFunctions.getRandomInt(1, 3);
        velocityY = gameFunctions.getRandomInt(-3, 3);
        lastXchange = new Date();
        return this.props.actions.changeEnemyDirection(this.id, velocityX, velocityY, lastXchange, lastYchange);
      } else {
        return;
      }
    } else if(wallHit ==='top'){
      if(this.props.enemy.velocity.y <= 0 && gameFunctions.checkTimeDifference(lastYchange) > 5000){
        velocityX = gameFunctions.getRandomInt(-3, -3);
        velocityY = gameFunctions.getRandomInt(1, 3);
        lastYchange = new Date();
        return this.props.actions.changeEnemyDirection(this.id, velocityX, velocityY, lastXchange, lastYchange);
      } else {
        return;
      }
    } else if(wallHit ==='bottom'){
      if(this.props.enemy.velocity.y >= 0 && gameFunctions.checkTimeDifference(lastYchange) > 5000){
        velocityX = gameFunctions.getRandomInt(-3, -3);
        velocityY = gameFunctions.getRandomInt(-1, -3);
        lastYchange = new Date();
        return this.props.actions.changeEnemyDirection(this.id, velocityX, velocityY, lastXchange, lastYchange);
      } else {
        return;
      }
    }

  }
  explosionStateChange = (finished) => {
    if(finished === 0){
        return this.props.actions.endGame(2);
    }

  }
  update(){
     const { player, enemy, bullet, gameBoard }  = {...this.props};
    //Player Movement
    if (player.velocity.x === -1 && player.x > 0) {
      //goes left
      this.playerCurrentXPosition = player.x - 2;
    } else if (player.velocity.x === 1 && player.x < gameBoard.width-60) {
      //goes right
      this.playerCurrentXPosition = player.x + 2;
    } else {
      //if swiped up or down player stops
      this.playerCurrentXPosition = player.x;
    }

    //bullet
    if (bullet.isAlive && bullet.y > 0) {
      this.bulletCurrentYPosition = bullet.y - 4;
      this.props.actions.bulletIsMoving(this.bulletCurrentYPosition);
    } else if (bullet.isAlive && bullet.y <= 0) {
      this.props.actions.bulletHasFinished();
    }

    //enemy
    if(enemy.x >= gameBoard.width-48){
      this.enemyChangeDirection('right');
    }
    if(enemy.x <= 0){
      this.enemyChangeDirection('left');
    }
    if(enemy.y >= gameBoard.height-48){
      this.enemyChangeDirection('bottom');
    }
    if(enemy.y <= 0){
      this.enemyChangeDirection('top');
    }

    //collission detection
    if (gameFunctions.checkRectCollision(enemy, bullet)) {
      this.props.actions.scored();
      this.props.actions.bulletHasFinished();
    }
    if(!gameFunctions.checkRectCollision(player, enemy)){
      this.props.actions.moveEnemy(enemy.id, (enemy.x+enemy.velocity.x),
      (enemy.y+enemy.velocity.y));
      this.props.actions.movePlayer(this.playerCurrentXPosition, gameBoard.height-60);
    } else {
        this.props.actions.enemyHitPlayer();
    }
  }

  render() {
    const { player, enemy, bullet, gameBoard, handleClickEvent, explosion }  = {...this.props};
    let bulletPosition = {transform: `translate(${bullet.x}px, ${bullet.y}px)`};
    return (
      <Stage width={gameBoard.width} height={gameBoard.height}>
        <World>
          <Hud score={player.score} handleClickEvent={handleClickEvent} />
          <Enemy enemy={enemy} />
          <Swipeable
            trackMouse={true}
            preventDefaultTouchmoveEvent={true}
            onSwipedLeft={() => this.onSwiped('LEFT')}
            onSwipedRight={() => this.onSwiped('RIGHT')}
            onSwipedUp={() => this.onSwiped('UP')}
            onSwipedDown={() => this.onSwiped('DOWN')}
            onTap={()=>this.fireBullet()}
            >
            {player.isAlive &&
              <Player
                player={player}
                />}
                {explosion.isAlive && <Explosion
                      className="explosion"
                      onPlayStateChanged={this.explosionStateChange}
                      positionX={player.x}
                      positionY={player.y}
                    />}
                {bullet.isAlive && <BulletImage style={bulletPosition}/>}
          </Swipeable>
        </World>
      </Stage>
    );
  }
}
GameLoop.propTypes = {
  handleClickEvent: PropTypes.func.isRequired,
  Game: PropTypes.shape({
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
    }).isRequired,
    player: PropTypes.shape({
      score: PropTypes.number.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      velocity: PropTypes.objectOf(PropTypes.number).isRequired,
      isAlive: PropTypes.bool.isRequired,
    }).isRequired,
    Bullet: PropTypes.shape({
      isAlive:PropTypes.bool.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
    Explosion:PropTypes.shape({
      isAlive:PropTypes.bool.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
}).isRequired,
};
export default GameLoop;
