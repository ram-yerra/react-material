import { handleResponse, handleError } from './apiUtils'; 
import { BASE_API_URL } from '../config/constants';

const formsApiUrl = `${BASE_API_URL}/forms/`;

const loadForms = function() {    
    return fetch(formsApiUrl)
        .then(handleResponse)
        .catch(handleError);
};

const createForm = function() {
    return fetch(formsApiUrl, { method: 'POST' })
        .then(handleResponse)
        .catch(handleError);
};

const deleteForm = function(formId) {
    return fetch(formsApiUrl + formId, { method: 'DELETE' })
        .then(handleResponse)
        .catch(handleError);
};

const previewForm = function(formId) {
    return fetch(formsApiUrl + formId)
        .then(handleResponse)
        .catch(handleError);
};

export {
    loadForms,
    createForm,
    deleteForm,
    previewForm 
}