import * as types from '../constants/ActionTypes';

export function hoveredGraph(sectionId) {
  console.log('Calling action');
  return {type: types.GRAPH_HOVERED, sectionId};
}
