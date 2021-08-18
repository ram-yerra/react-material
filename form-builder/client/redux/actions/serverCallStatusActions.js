import { BEGIN_SERVER_CALL, SERVER_CALL_ERROR } from './actionTypes';


const beginServerCall = function() {
    return { type: BEGIN_SERVER_CALL };
};

const serverCallError = function() {
    return { type: SERVER_CALL_ERROR };
};

export {
    beginServerCall,
    serverCallError
}

