import React from 'react';
import Enemy from './Enemy';

const Enemies = (props) => {
  return (
    props.enemies.map((enemy) => {
      <Enemy {...enemy} />;
  })
);
};

export default Enemies;
