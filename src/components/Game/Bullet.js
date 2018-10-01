import React from 'react';
import BulletImage from './BulletImage';

const Bullet = (props) => {
  let style = {transform:`translate(${props.style.x}px, ${props.style.y}px)`};
  return (
    <BulletImage style={style} />
  );
};

export default Bullet;
