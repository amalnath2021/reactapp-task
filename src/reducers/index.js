import { combineReducers } from 'redux';


import raflesReducer from './raflesReducer';


const rootReducer = combineReducers({
  rafles:raflesReducer

});

export default rootReducer;
