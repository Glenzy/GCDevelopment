import React from 'react';
import Button from '../CommonComponents/Button';
import { hudPropTypes } from '../../types/GameTypes';
import Score from './Score';
const Hud = (props) => {
return (
  <div className="hud">
    <Button handleClickEvent={props.handleClickEvent} styleClasses="btn endgame" content="End Game" />
    <Score score={props.score} />
  </div>
);
};
Hud.propTypes = {
  ...hudPropTypes
};
export default Hud;
