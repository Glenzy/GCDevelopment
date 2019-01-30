import React from 'react';
import { gameIntroPropTypes } from '../../types/GameTypes';
import Button from '../CommonComponents/Button';
import Star from '../../images/star';

const GameIntro = (props) => {
  return (
    <div className="GameIntroWrapper">
        <h2>Space Invaders</h2>
        <Button {...props} handleClickEvent={props.handleClickEvent} name="startBtn" content="START GAME" styleClasses="startBtn"/>
          <Star style={"a"} />
          <Star style="b" />
          <Star style="c" />
          <Star style="d" />
          <Star style="e" />
    </div>
  );
};
GameIntro.propTypes = {
  ...gameIntroPropTypes 
};
export default GameIntro;
