import React, { Component } from 'react';
import { topScoresPropTypes } from '../../types/GameTypes';

class TopScores extends Component {

  render() {
    let key = 0;
    return (
      <div className="topScores">
        <h4>Top scores:</h4>
        <ol type="1">
          {this.props.scores.map((score) => {
            key = key+1;
          return <li key={key}>{key}. {score.name} : {score.score}</li>;
          })}
        </ol>
      </div>
    );
  }
}
TopScores.propTypes = {
    ...topScoresPropTypes
  };
export default TopScores;
