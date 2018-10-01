import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../CommonComponents/Button';
import Star from '../../images/star';
import Score from './Score';
import TextInput from '../CommonComponents/TextInput';
import TopScores from './TopScores';
class GameOver extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      topScores:{},
      playerName:'',
    };

  }
saveScore =() => {
  const score = this.props.score;
  const name = this.state.playerName;
  return  this.props.saveScore(score, name);
}
onChange = (event) => {
  return this.setState({
    playerName:event.target.value
  });
}
  render() {
    const { showScores, scores } = this.props.topScores;
    return (
      <div className="GameIntroWrapper gameOver">
          <h2>Space Invaders</h2>
          <Score score={this.props.score}/>
        { showScores ? (<TopScores scores={scores} />) : (
          <div className="scoreInput">
            <TextInput name="playerName" onChange={this.onChange} onBlur={this.getTopScores} value={this.state.playerName} label="Name:" />
            <Button  handleClickEvent={this.saveScore} name="saveScore" content="save" styleClasses="btn saveName"/>
          </div>
          )
        }
          <Button  handleClickEvent={this.props.handleClickEvent} name="startBtn" content="PLAY AGAIN" styleClasses="startBtn"/>
            <Star style={"a"} />
            <Star style="b" />
            <Star style="c" />
            <Star style="d" />
            <Star style="e" />
      </div>
    );
  }

}
GameOver.propTypes = {
  handleClickEvent :  PropTypes.func.isRequired,
  topScores: PropTypes.shape({
    showScores: PropTypes.bool.isRequired,
    scores: PropTypes.array.isRequired,
  })
};
export default GameOver;
