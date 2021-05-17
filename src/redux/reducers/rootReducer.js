import { combineReducers } from 'redux';
import countryReducer from './countryReducer';

const rootReducer = combineReducers({
  livestock: countryReducer,
});

export default rootReducer;
