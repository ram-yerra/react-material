import { combineReducers } from 'redux';
import formsReducer from './formsReducer';
import fieldsReducer from './fieldsReducer';

const rootReducer = combineReducers({
    formsReducer,
    fieldsReducer    
});

export default rootReducer;