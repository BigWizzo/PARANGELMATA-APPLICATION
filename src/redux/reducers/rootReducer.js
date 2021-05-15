import { combineReducers } from 'redux';
import livestockReducer from './livestockReducer';

const rootReducer = combineReducers({
  livestock: livestockReducer,
});

export default rootReducer;
