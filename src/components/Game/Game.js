import React, {Component} from 'react';
import * as actions from '../../actions/GameActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { gamePropTypes } from '../../types/GameTypes';
import GameLoop from './GameLoop';
import {Loop} from 'react-game-kit';
class Game extends Component {

  constructor(props, context) {
    super(props, context);
    this.gameBoardRef = React.createRef();
    this.setGame = this.setGame.bind(this);
  }

  componentDidMount() {
    const gameBoard = this.gameBoardRef.current.getBoundingClientRect();
    this.gameBoardRef.current.focus();
    this.setGame(gameBoard);
  }

  setGame(gameBoard) {
      this.props.actions.movePlayer(0, gameBoard.height-60);
      this.props.actions.setGameBoard(gameBoard);
     return this.props.actions.changeGameState();
  }



  render() {
    const {Game, handleClickEvent, actions, } = {...this.props};
    return (
    <div id="gameBoard" className={Game.hasGameStarted ? "game-wrapper fadeIn" : "game-wrapper"}
      onKeyPress={this.handleKeyPress} ref={this.gameBoardRef}>
      <Loop>
        <GameLoop
          {...Game}
          handleClickEvent={handleClickEvent}
          actions={actions}
          />
      </Loop>
    </div>);
  }
}
Game.propTypes = {
  ...gamePropTypes
};
function mapStateToProps(state) {
  return {Game: state.Game};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...actions
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
