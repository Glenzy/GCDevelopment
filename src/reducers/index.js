import { combineReducers } from 'redux';
import  GameReducer  from './GameReducer';
import MenuReducer from './MenuReducer';
import DevExampleReducer from './DevExampleReducer';

const rootReducer = combineReducers({
  Game:GameReducer,
  Menu:MenuReducer,
  DevExamples:DevExampleReducer,
});

export default rootReducer;
