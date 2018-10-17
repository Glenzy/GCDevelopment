import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function DevExamplesReducer(state = initialState.DevExamples, action) {
  console.log('calling reducer', action);
  switch (action.type) {
    case types.GRAPH_HOVERED:
      return {
          ...state,
        RadialGraph: {
          ...state.RadiaGraph,
          hoveredSection:action.sectionId
        }
      };
    default:
      return state;
    }
  }
