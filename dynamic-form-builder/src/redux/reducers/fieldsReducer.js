import { LOAD_FIELDS_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

const fieldsReducer = (state = initialState.fields, action) => {
    switch (action.type) {
        case LOAD_FIELDS_SUCCESS:
            return action.fields;
        default:
            return state;
    }
};

export default fieldsReducer;