import { LOAD_FORMS_SUCCESS, CREATE_FORM_SUCCESS, DELETE_FORM_SUCCESS, PREVIEW_FORM_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

const formsReducer = (state = { forms: initialState.forms, form: initialState.form }, action) => {
    switch (action.type) {
        case LOAD_FORMS_SUCCESS: 
            return { forms: action.forms, form: initialState.form };
        case CREATE_FORM_SUCCESS:
            return { forms: [...state.forms, {...action.form}], form: initialState.form };
        case DELETE_FORM_SUCCESS:
            return { forms: state.filter(form => form._id !== action.form), form: initialState.form };
        case PREVIEW_FORM_SUCCESS:
            return { forms: state.forms, form: action.form };
        default: 
            return state;
    }
};

export default formsReducer;