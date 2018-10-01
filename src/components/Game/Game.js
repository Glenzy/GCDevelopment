import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/GameActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Enemy from './Enemy';
import Player from './Player';
import Hud from './Hud';
import {Loop, Stage, World} from 'react-game-kit';
import Swipeable from 'react-swipeable';
class Game extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      gameBoard: {},
      hasGameStarted:false,
    };
    this.gameBoardRef = React.createRef();
    this.enemyRef = React.createRef();
    this.playerRef = React.createRef();
    this.setGame = this.setGame.bind(this);
    this.onSwiped = this.onSwiped.bind(this);
    this.fireBullet = this.fireBullet.bind(this);
  }
  componentDidMount() {
    const gameBoard = this.gameBoardRef.current.getBoundingClientRect();
    this.gameBoardRef.current.focus();
    this.setGame(gameBoard);
  }
  setGame(gameBoard) {
    this.props.actions.movePlayer(0, gameBoard.height-60);
    return this.setState({gameBoard, hasGameStarted:!this.state.hasGameStarted});
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }
  onSwiped(direction) {
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
  fireBullet(){
    if(!this.props.Game.bullet.isAlive){
      this.props.actions.bulletIsMoving(this.props.Game.player.x, this.state.gameBoard.height-50);
      return this.props.actions.fireBullet();
    }
  }
  render() {
    const {gameBoard, hasGameStarted} = this.state;
    const {Game, actions, handleClickEvent} = this.props;
    return (
    <div id="gameBoard" className={hasGameStarted ? "game-wrapper fadeIn" : "game-wrapper"}
      onKeyPress={this.handleKeyPress} ref={this.gameBoardRef}>
      <Loop>
        <Stage width={gameBoard.width} height={gameBoard.height}>
          <World>
            <Hud score={Game.player.score} handleClickEvent={handleClickEvent} />
            <Enemy
              ref={this.enemyRef}
              {...Game.enemy}
              moveEnemy={actions.moveEnemy} changeEnemyDirection={actions.changeEnemyDirection}
              gameBoard={this.state.gameBoard}
              player={this.props.Game.player}
              />
            <Swipeable
              trackMouse={true}
              preventDefaultTouchmoveEvent={true}
              onSwipedLeft={() => this.onSwiped('LEFT')}
              onSwipedRight={() => this.onSwiped('RIGHT')}
              onSwipedUp={() => this.onSwiped('UP')}
              onSwipedDown={() => this.onSwiped('DOWN')}
              onTap={()=>this.fireBullet()}
              >
              {this.state.hasGameStarted &&
                <Player
                  ref={this.playerRef}
                  {...Game.player}
                  enemy={Game.enemy}
                  gameBoard={gameBoard}
                  movePlayer={actions.movePlayer}
                  bullet={Game.bullet}
                  explosion={Game.explosion}
                  bulletIsMoving={actions.bulletIsMoving}
                  bulletHasFinished={actions.bulletHasFinished}
                  scored={actions.scored}
                  enemyHitPlayer={actions.enemyHitPlayer}
                  endGame={actions.endGame}
                  />}
            </Swipeable>
          </World>
        </Stage>
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
      velocity: PropTypes.objectOf(PropTypes.number).isRequired,
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
