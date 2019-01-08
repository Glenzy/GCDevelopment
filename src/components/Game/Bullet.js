import React from 'react';
import BulletImage from './BulletImage';
import { bulletPropTypes } from '../../types/GameTypes';

const Bullet = (props) => {
  const {positionX, positionY} = props.style;
  let style = {transform:`translate(${positionX}px, ${positionY}px)`};
  return (
    <BulletImage style={style} />
  );
};
Bullet.propTypes = {
  ...bulletPropTypes
};
export default Bullet;
