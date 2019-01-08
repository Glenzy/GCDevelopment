import React from 'react';
import { scorePropTypes } from '../../types/GameTypes';
const Score = (props) => {
 return (
   <div className="scoreWrapper">
     <h4 className="score text">Your Score: </h4>
     <h4 className="score number">{props.score}</h4>
   </div>
 );
};
Score.propTypes = {
  ...scorePropTypes
};
export default Score;
