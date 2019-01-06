import axios from 'axios';
import queryString from 'query-string';
import * as types from '../constants/ActionTypes';

export function startGame(value) {
  return {type: types.START_GAME, value};
}
export function endGame(value){
  //return function saveScoreToDatabase(dispatch)
  return {type:types.END_GAME, value};
}
export function addEnemyCount(value) {
  return {type: types.ADD_ENEMY_COUNT, value};
}
export function createEnemy(count) {
  return {type: types.CREATE_ENEMY, count};
}
export function movePlayer(x, y) {
  return {type: types.MOVE_PLAYER, x, y};
}
export function moveEnemy(id, x, y) {
  return {type: types.MOVE_ENEMY, id, x, y};
}
export function changeEnemyDirection(id, x, y, lastXchange, lastYchange) {
  return {type: types.CHANGE_ENEMY_DIRECTION,  id, x, y, lastXchange, lastYchange};
}
export function changeVelocity(x, y) {
  return {type: types.CHANGE_PLAYER_DIRECTION, x, y};
}
export function fireBullet(x, y){
  return {type:types.BULLET_INITIATE, x, y};
}
export function bulletIsMoving(y){
  return {type:types.BULLET_IS_MOVING, y};
}
export function bulletHasFinished(){
  return {type:types.BULLET_HAS_STOPPED};
}
export function scored(){
  return {type:types.PLAYER_HAS_SCORED};
}
export function enemyHitPlayer(){
  return {type:types.ENEMY_HIT_PLAYER};
}
export function changeGameState(){
return {type:types.CHANGE_GAME_STATE};
}
export function setGameBoard(gameBoard){
  return {
    type:types.SET_GAME_BOARD,
    gameBoard
  };
}
/*
* 1: Write score to database
* 2: Get top scores from database
*/
export function saveScore(score, playerName) {
  return function (dispatch) {
    let topScores = [];
    const scoreData = queryString.stringify({
      playerName:playerName,
      score:score
    });
    return axios({
      method: 'post',
      url: 'http://folio:8888/',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      data: scoreData,
    }).then((response) => {
      if (response.data.length > 0) {
        response.data.forEach((score) => {
          topScores.push(score);
        });
      }
      return dispatch({
        type: types.TOP_SCORES,
        topScores
      });
    }).catch((error) => {
      return new Error('Couldn\'t write scores to database: ' + toString(error));
    });
  };
}
