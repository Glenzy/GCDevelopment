import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function DevExamplesReducer(state = initialState.DevExamples, action) {
  console.log('calling reducer',state.skills[action.sectionId]);
  switch (action.type) {
    case types.GRAPH_HOVERED:
      return {
          ...state,
        RadialGraph: {
          ...state.RadiaGraph,
          hoveredSection:action.sectionId
        },
      /*  skills: state.skills.map((skill) =>{
          if(skill.id === action.sectionId){
            return {
              ...skill,
              angle:10,
              stopOpacityA:1,
              stopOpacityB:0.8
            };
          }
        })*/
      };
    default:
      return state;
    }
  }
