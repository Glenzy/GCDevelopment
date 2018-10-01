import * as types from '../constants/ActionTypes';
import initialState from './initialState';


export default function MenuReducer(state = initialState.Menu, action) {
  switch (action.type) {
    case types.LINK_CLICKED:
    return  {
          ...state,
          links: state.links.map((link) => {
            if(link.id === action.id){
              return {
                ...link,
              active:true
              };
            } else if(link.active){
              return {
                ...link,
              active:false
              };
            } else {
              return link;
            }
          })
        };
    case types.ACTIVATE_MENU:
    return {
      ...state,
      open: action.menuState,
    };
    default:
      return state;
  }
}
