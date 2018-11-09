import React from 'react';
import PropTypes from 'prop-types';
import PlayerCharacter from './PlayerCharacter';
class Player extends React.Component {
  render() {
    let playerPosition = {
      transform: `translate(${this.props.player.x}px, ${this.props.player.y}px)`
    };

    return (
    <PlayerCharacter style={playerPosition}/>
    );
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
