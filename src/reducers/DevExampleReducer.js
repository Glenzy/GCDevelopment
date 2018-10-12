import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function DevExamplesReducer(state = initialState.DevExamples, action) {
  switch (action.type) {
    case types.GRAPH_HOVERED:
      return state;
    default:
      return state;
    }
  }
