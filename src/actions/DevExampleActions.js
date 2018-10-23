import * as types from '../constants/ActionTypes';

export function interactedWithGraph(sectionId) {
  return {type: types.INTERACTED_WITH_GRAPH, sectionId};
}
