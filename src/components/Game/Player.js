import React from 'react';
import { playerPropTypes } from '../../types/GameTypes';
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
  ...playerPropTypes 
};
export default Player;
