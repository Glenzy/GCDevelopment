import React from 'react';
import PropTypes from 'prop-types';
import * as gameFunctions from '../../utils/gameFunctions';
import PlayerCharacter from './PlayerCharacter';
import BulletImage from './BulletImage';
import Explosion from './Explosion';
class Player extends React.Component {
  static contextTypes = {
    loop: PropTypes.object
  };
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.x = this.props.x;
    this.y = this.props.y;
    this.bulletY = this.props.y;
    this.explosionState = 0;
    this.explosionStep = 0;
  }
  componentDidMount() {
    this.context.loop.subscribe(this.update);
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update);
  }
  explosionStateChange = (finished) => {
    if(finished === 0){
        return this.props.endGame(2);
    }

  }
  update() {
    const gameBoard = this.props.gameBoard;
    if (this.props.velocity.x === -1 && this.props.x > 0) {
      this.x = this.props.x - 1;
    } else if (this.props.velocity.x === 1 && this.props.x < gameBoard.width - 60) {
      this.x = this.props.x + 1;
    } else {
      this.x = this.props.x;
    }
    if (gameFunctions.checkRectCollision(this.props.enemy, this.props)) {
      this.props.enemyHitPlayer();
    } else if (this.props.isAlive) {
      this.props.movePlayer(this.x, this.y);
    }
    if (this.props.bullet.isAlive && this.props.bullet.y > 0) {
      this.bulletY = this.props.bullet.y - 2;
      this.props.bulletIsMoving(this.props.bullet.x, this.bulletY);
    } else if (this.props.bullet.isAlive && this.props.bullet.y <= 0) {
      this.props.bulletHasFinished();
    }
    if (gameFunctions.checkRectCollision(this.props.enemy, this.props.bullet)) {
      this.props.scored();
      this.props.bulletHasFinished();
    }

  }
  render() {
    let playerPosition = {
      position: "absolute",
      transform: `translate(${this.props.x}px, ${this.props.y}px)`
    };
    let bulletPosition = {
      transform: `translate(${this.props.bullet.x}px, ${this.props.bullet.y}px)`
    };

    return (<div>
      {this.props.isAlive && <PlayerCharacter style={playerPosition}/>}
      {this.props.explosion.isAlive && <Explosion
            className="explosion"
            onPlayStateChanged={this.explosionStateChange}
            positionX={this.props.x}
            positionY={this.props.y}
          />}
      {this.props.bullet.isAlive && <BulletImage style={bulletPosition}/>}
    </div>);
  }
}
Player.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};
export default Player;
