import React from 'react';
import PropTypes from 'prop-types';
import PlayerCharacter from './PlayerCharacter';
import BulletImage from './BulletImage';
import Explosion from './Explosion';
class Player extends React.Component {
  render() {
    let playerPosition = {
      transform: `translate(${this.props.player.x}px, ${this.props.player.y}px)`
    };
    let bulletPosition = {
      transform: `translate(${this.props.bullet.x}px, ${this.props.bullet.y}px)`
    };

    return (
    <div ref="playerWrapper">
      {this.props.player.isAlive && <PlayerCharacter style={playerPosition}/>}
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
  player: PropTypes.shape({
    score: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    velocity: PropTypes.objectOf(PropTypes.number).isRequired,
    lives: PropTypes.number.isRequired,
  }).isRequired,
};
export default Player;
