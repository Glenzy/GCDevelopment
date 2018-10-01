import React from 'react';
import PropTypes from 'prop-types';
import EnemyCharacter from './EnemyCharacter';
import * as gameFunctions from '../../utils/gameFunctions';
class Enemy extends React.Component {
  static contextTypes = {
    loop: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.id = this.props.id;
    this.x = this.props.velocity.x;
    this.y = this.props.velocity.y;
  }
  componentDidMount() {
    this.context.loop.subscribe(this.update);
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update);
  }
  changeDirection = () => {
    this.x = gameFunctions.getRandomInt(-1, 1);
    this.y = gameFunctions.getRandomInt(-1, 1);
    if(this.x === this.props.velocity.x || this.y === this.props.velocity.y){
      return this.changeDirection();
    }
    return this.props.changeEnemyDirection(this.id, this.x, this.y);
  }

  update(){
    const gameBoard = this.props.gameBoard;

      if(this.props.x >= gameBoard.width-48){
        this.changeDirection();
      }
      if(this.props.x <= 0){
        this.changeDirection();
      }
      if(this.props.y >= gameBoard.height-48){
        this.changeDirection();
      }
      if(this.props.y <= 0){
        this.changeDirection();
      }
      if(!gameFunctions.checkRectCollision(this.props.player, this.props)){
        this.props.moveEnemy(this.props.id, this.props.x+this.x,
         this.props.y+this.y);
      } else {
        return;
        //console.log('hit',gameFunctions.checkRectCollision(this.props.enemy, this.props) );
      }
  }

  render() {
    let position = {position:"absolute", transform:`translate(${this.props.x}px, ${this.props.y}px)`};
    return(
        <EnemyCharacter
          style={position}
          id={this.props.id}
        />
    );
  }
}
Enemy.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  moveEnemy: PropTypes.func.isRequired,
  gameBoard: PropTypes.object.isRequired,
};
export default Enemy;




/*
const KeyEvent = () => null;
const Enemy = ({ children }) => {
  React.Children.forEach(children, (child)=>{
    if(child.type === KeyEvent){
      if(child.props.onDown) {
        console.log('child', child);
      }
    }
  });
};

Enemy.propTypes = {
//  : PropTypes.
};

export default Enemy;
*/
