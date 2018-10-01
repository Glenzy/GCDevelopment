import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopScores extends Component {

  render() {
    let key = 0;
    return (
      <div className="topScores">
        <h4>Top scores:</h4>
        <ol type="1">
          {this.props.scores.map((score) => {
            console.log('score', score);
            key = key+1;
          return <li key={key}>{key}. {score.name} : {score.score}</li>;
          })}
        </ol>
      </div>
    );
  }
}
TopScores.propTypes = {
    scores: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
export default TopScores;
