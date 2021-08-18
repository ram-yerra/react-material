import { LOAD_FORMS_SUCCESS, CREATE_FORM_SUCCESS, DELETE_FORM_SUCCESS, PREVIEW_FORM_SUCCESS } from './actionTypes';
import * as formsApi from '../../api/formsApi';
import { beginServerCall, serverCallError } from './serverCallStatusActions';

const loadFormsSuccess = function(forms) {
    return { type: LOAD_FORMS_SUCCESS, forms };
};

const createFormSuccess = function(form) {
    return { type: CREATE_FORM_SUCCESS, form };
};

const deleteFormSuccess = function(form) {
    return { type: DELETE_FORM_SUCCESS, form };
};

const previewFormSuccess = function(form) {
    return { type: PREVIEW_FORM_SUCCESS, form };
}

const loadForms = function() {
    return function(dispatch) {
        dispatch(beginServerCall());
        return formsApi
            .loadForms()
            .then(forms => {
                dispatch(loadFormsSuccess(forms));
            })
            .catch(error => {
                dispatch(serverCallError(error));
                throw error;
            })
    }
};

const deleteForm = function(formId) {
    return function(dispatch) {
        dispatch(beginServerCall());
        return formsApi
            .deleteForm(formId)
            .then(() => {
                dispatch(deleteFormSuccess(formId))
            })
            .catch(error => {
                dispatch(serverCallError(error));
                throw error;
            })
    }
};

const previewForm = function(formId) {
    return function(dispatch) {
        dispatch(beginServerCall());
        return formsApi
            .previewForm(formId)
            .then((form) => {
                dispatch(previewFormSuccess(form));
            })
            .catch(error => {
                serverCallError(error);
                throw(error);
            })
    }
}

const createForm = function(form) {
    return function(dispatch) {
        dispatch(beginServerCall());
        return formsApi
            .createForm(form)
            .then(() => {
                dispatch(createFormSuccess(form))
            })
            .catch(error => {
                dispatch(serverCallError(error));
                throw error;
            })
    }
};

export {
    loadForms,
    deleteForm,
    createForm,
    previewForm,
    loadFormsSuccess,
    createFormSuccess,
    deleteFormSuccess,
    previewFormSuccess
}

