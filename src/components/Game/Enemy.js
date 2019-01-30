import React from 'react';
import { enemyPropTypes } from '../../types/GameTypes';
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
  ...enemyPropTypes
};
export default Enemy;