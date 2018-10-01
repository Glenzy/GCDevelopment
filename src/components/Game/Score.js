import React from 'react';
import PropTypes from 'prop-types';
const Score = (props) => {
 return (
   <div className="scoreWrapper">
     <h4 className="score text">Your Score: </h4>
     <h4 className="score number">{props.score}</h4>
   </div>
 );
};
Score.propTypes = {
  score: PropTypes.number.isRequired,
};
export default Score;
