import { combinbeReducers } from 'redux';
import livestockReducer from './livestockReducer';

const rootReducer = combinbeReducers({
  livestock: livestockReducer,
});

export default rootReducer;
