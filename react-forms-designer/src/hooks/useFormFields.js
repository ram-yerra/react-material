import { useContext  } from 'react';
import { FormFieldsContext } from '../contexts/FormFieldsContext';

const useFormFields = () => {
    const [state, setState] = useContext(FormFieldsContext);

    const displayAddEditForm = (isEditMode) => {
        setState(state => ({ ...state, isEditMode }));
    };

    const setFormFieldId = (fieldId = null) => {
        console.log(fieldId);
        setState(state => ({ ...state, fieldId }));
        let field = state.field;
        if (fieldId) {
            field = state.fields.filter(f => f.id === fieldId);
        } else {
            field = { ...state.initialFieldState };
            field.order = state.fields.length > 0 ? +state.fields[state.fields.length-1].order + 1 : 0;
            field.id = generateUniqueId();
        }
        setFormField(field.constructor.name === 'Array' ? field[0] : field);
    };

    const setFormField = (field = state.field) => {
        console.log(field);
        setState(state => ({ ...state, field }));
        displayAddEditForm(true);
    };
    
    const saveFormField = (field) => {
        let fieldIndex = state.fields.findIndex(f => f.id === field.id);
        let fields = [ ...state.fields];
        field.isExistingField = true;
        if (fieldIndex !== -1) {
            fields = fields.map((item) => {
                if (item.id === field.id) item = { ...field };
                return item;
            });
        } else {
            fields = [ ...state.fields, field ];
        }
        setState(state => ({ ...state, fields }));
        displayAddEditForm(false);
    };    

    const generateUniqueId = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    return {
        field: state.field,
        fields: state.fields,
        isEditMode: state.isEditMode,
        displayAddEditForm,
        saveFormField,
        setFormFieldId        
    };
};

export default useFormFields;