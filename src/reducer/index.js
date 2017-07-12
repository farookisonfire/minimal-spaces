import {combineReducers} from 'redux';
import showCanvas from '../features/landing/landingReducer';
import programs from '../features/admissions/programsReducer';

const rootReducer = combineReducers({
  showCanvas,
  programs
});

export default rootReducer;