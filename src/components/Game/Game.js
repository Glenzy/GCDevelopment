import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/GameActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
      this.props.actions.movePlayer(-gameBoard.width/2, gameBoard.height-60);
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
      lives: PropTypes.number.isRequired,
    }).isRequired,
}).isRequired,
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
