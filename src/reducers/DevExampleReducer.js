import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function DevExamplesReducer(state = initialState.DevExamples, action) {
  switch (action.type) {
    case types.INTERACTED_WITH_GRAPH:
      return {
          ...state,
        skills: state.skills.map((skill) =>{
          if(skill.id === action.sectionId){
            return {
              ...skill,
              active:true,
              angle:10,
              stopOpacityA:1,
              stopOpacityB:0.8
            };
          } else {
            return {
              ...skill,
              active:false,
              angle:5,
              stopOpacityA:0.6,
              stopOpacityB:0.3
            };
          }
        })
      };
  case types.SHOW_EXAMPLES:
    return {
      ...state,
      showExamples:!state.showExamples
    };
    default:
      return state;
    }
  }
