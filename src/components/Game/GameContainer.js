import React, { Component } from 'react';
import * as actions from '../../actions/GameActions';
import {
  connect,
} from 'react-redux';
import {
  bindActionCreators,
} from 'redux';
import GameIntro from './GameIntro';
import Game from './Game';
import GameOver from './GameOver';
class GameContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClickEvent = this.handleClickEvent.bind(this);

  }

  handleClickEvent() {
    let value = this.props.Game.gameState === 1 ? this.props.actions.endGame(2) : this.props.actions.startGame(1);
    return value;
  }
  returnGame = () => {
    if(this.props.Game.gameState === 0){
      return <GameIntro handleClickEvent={this.handleClickEvent}/>;
    }
    if(this.props.Game.gameState === 1){
      return   <Game handleClickEvent={this.handleClickEvent}/>;
    }
    if(this.props.Game.gameState === 2){
      return   (<GameOver
                handleClickEvent={this.handleClickEvent}
                score={this.props.Game.player.score}
                saveScore={this.props.actions.saveScore}
                topScores={this.props.Game.topScores}
                />
                );
    }
  }
  render() {
    const Game = this.returnGame;
    return (
        <Game />
    );
  }
}
function mapStateToProps(state) {
  return {
    Game: state.Game,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...actions}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
