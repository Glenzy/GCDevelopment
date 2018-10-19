import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function DevExamplesReducer(state = initialState.DevExamples, action) {
  console.log('calling reducer',state.skills[action.sectionId]);
  switch (action.type) {
    case types.GRAPH_HOVERED:
      return {
          ...state,
        skills: state.skills.map((skill) =>{
          if(skill.id === action.sectionId){
            return {
              ...skill,
              hovered:true,
              angle:10,
              stopOpacityA:1,
              stopOpacityB:0.8
            };
          } else {
            return {
              ...skill,
              hovered:false,
              angle:5,
              stopOpacityA:0.6,
              stopOpacityB:0.3
            };
          }
        })
      };
    default:
      return state;
    }
  }
