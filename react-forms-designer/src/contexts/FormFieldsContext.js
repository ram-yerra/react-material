import React, { useState } from 'react';


const FormFieldsContext = React.createContext([{}, () => {}]);

const FormFieldsProvider = (props) => {
    console.log(props);
    const initialFieldState = {
        id: '',
        visible: true,
        required: true,
        order: null,
        label: '',
        type: 'text',
        isExistingField: false
    };
    const [state, setState] = useState({
        fields: [ ],
        isEditMode: false,
        fieldId: null,
        field: initialFieldState,
        initialFieldState
    });
    return (
        <FormFieldsContext.Provider value={[state, setState]}>
            {props.children}
        </FormFieldsContext.Provider>
    );
};

export { FormFieldsContext, FormFieldsProvider };