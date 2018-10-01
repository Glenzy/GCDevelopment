import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function GameReducer(state = initialState.Game, action, resetState = initialState.Game) {
  const score = state.player.score;
  switch (action.type) {
    case types.MOVE_PLAYER:
      return {
        ...state,
        player: {
          ...state.player,
          x: action.x,
          y: action.y
        }
      };
    case types.CHANGE_PLAYER_DIRECTION:
      return {
        ...state,
        player: {
          ...state.player,
          velocity: {
            ...state.player.velocity,
            x: action.x,
            y: action.y
          }
        }
      };
    case types.MOVE_ENEMY:
      return {
        ...state,
        enemy: {
          ...state.enemy,
          x: action.x,
          y: action.y
        }
      };
    case types.CHANGE_ENEMY_DIRECTION:
      return {
        ...state,
        enemy: {
          ...state.enemy,
          velocity: {
            ...state.enemy.velocity,
            x: action.x,
            y: action.y
          }
        }
      };
    case types.START_GAME:
      return {
        ...state,
        gameState: action.value,
        player: {
          ...state.player,
          score:0,
        }
      };

    case types.END_GAME:
      return {
        ...resetState,
        gameState: action.value,
        player: {
          ...resetState.player,
          score:state.player.score,
        }
      };

    case types.BULLET_INITIATE:
      return {
        ...state,
        bullet: {
          ...state.bullet,
          isAlive: !state.bullet.isAlive
        }
      };
    case types.ENEMY_HIT_PLAYER:
      return {
        ...state,
        explosion: {
          ...state.explosion,
          isAlive: true,
          x: state.player.x,
          y: state.player.y
        },
        player: {
          ...state.player,
          isAlive: false
        }
      };
    case types.BULLET_IS_MOVING:
      return {
        ...state,
        bullet: {
          ...state.bullet,
          x: action.x,
          y: action.y
        }
      };
    case types.BULLET_HAS_STOPPED:
      return {
        ...state,
        bullet: {
          ...state.bullet,
          isAlive: false
        }
      };
    case types.PLAYER_HAS_SCORED:
      return {
        ...state,
        player: {
          ...state.player,
          score: score + 1
        }
      };
      case types.TOP_SCORES:
        return {
          ...state,
          topScores: {
            ...state.topScores,
            showScores: true,
            scores:action.topScores,
          }
        };
    case types.CREATE_ENEMY:
      return state;
    default:
      return state;
  }
}
