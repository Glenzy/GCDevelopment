import { combineReducers } from 'redux';
import  GameReducer  from './GameReducer';
import MenuReducer from './MenuReducer';
import DevExamplesReducer from './DevExamplesReducer';

const rootReducer = combineReducers({
  Game:GameReducer,
  Menu:MenuReducer,
  DevExamples:DevExamplesReducer,
});

export default rootReducer;
