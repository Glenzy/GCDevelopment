import * as types from '../constants/ActionTypes';

export function hoveredGraph(sectionId) {
  return {type: types.GRAPH_HOVERED, sectionId};
}
