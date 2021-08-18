import axios from 'axios';

import { handleResponse, handleError } from './apiUtils'; 
import { BASE_API_URL } from '../config/constants';

const formsApiUrl = `${BASE_API_URL}/forms/`;

const loadForms = function() {    
    // return fetch(formsApiUrl)
    return axios.get(formsApiUrl)
        .then(handleResponse)
        .catch(handleError);
};

const createForm = function() {
    // return fetch(formsApiUrl, { method: 'POST' })
    return axios.post(formsApiUrl)
        .then(handleResponse)
        .catch(handleError);
};

const deleteForm = function(formId) {
    // return fetch(formsApiUrl + formId, { method: 'DELETE' })
    return axios.delete(formsApiUrl + formId)
        .then(handleResponse)
        .catch(handleError);
};

const previewForm = function(formId) {
    // return fetch(formsApiUrl + formId)
    return axios.get(formsApiUrl + formId)
        .then(handleResponse)
        .catch(handleError);
};

export {
    loadForms,
    createForm,
    deleteForm,
    previewForm 
}