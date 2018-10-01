import React from 'react';
import Button from '../CommonComponents/Button';
import Score from './Score';
const Hud = (props) => {
return (
  <div className="hud">
    <Button handleClickEvent={props.handleClickEvent} styleClasses="btn endgame" content="End Game" />
    <Score score={props.score} />
  </div>
);
};

export default Hud;
