import { handleResponse, handleError } from './apiUtils'; 
import { BASE_API_URL } from '../config/constants';

const loadFields = function() {
    const fieldsApiUrl = `${BASE_API_URL}/fields`;
    return fetch(fieldsApiUrl)
        .then(handleResponse)
        .catch(handleError);
};

export {
    loadFields
};