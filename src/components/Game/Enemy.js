import React from 'react';
import PropTypes from 'prop-types';
import EnemyCharacter from './EnemyCharacter';

const Enemy = ({enemy}) => {
  const {id, x, y} = {...enemy};
  let position = {position:"absolute", transform:`translate(${x}px, ${y}px)`};
  return(
      <EnemyCharacter
        style={position}
        id={id}
      />
  );
};
Enemy.propTypes = {
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
  }).isRequired
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
