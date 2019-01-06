import * as types from '../constants/ActionTypes';

export function linkClicked(id) {
  return {type: types.LINK_CLICKED, id};
}
export function openMenu(menuState) {
  return {type: types.ACTIVATE_MENU, menuState};
}
