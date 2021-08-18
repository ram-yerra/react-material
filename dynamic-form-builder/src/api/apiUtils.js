const handleResponse = async function(response) {
    if (response.ok) return response.json();
    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error("Network response was not ok!");
};

const handleError = function(error) {
    console.log('API call failed: ', error);
    throw error;
};

export {
    handleResponse,
    handleError
};