import React, { useEffect, useState } from 'react';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AddEditForm.scss';

import useFormFields from '../../hooks/useFormFields';

import CheckboxInput from '../common/formFields/checkboxInput/CheckboxInput';
import NumberInput from '../common/formFields/numberInput/NumberInput';
import TextInput from '../common/formFields/textInput/TextInput';
import SelectInput from '../common/formFields/selectInput/SelectInput';


const AddEditForm = () => { 
    const { field, displayAddEditForm, saveFormField } = useFormFields();    
    const [ formField, setFormField ] = useState(field);    
    useEffect(() => {
        console.log('field',field);
        setFormField(field);        
    }, [field]);
    const types = [
        { value: 'text', label: 'Text' },
        { value: 'textArea', label: 'Text Area' },
        { value: 'dropdown', label: 'Dropdown' },
        { value: 'multiSelect', label: 'Multiselect' },
        { value: 'checkBox', label: 'Checkbox' }
    ];

    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        setFormField(prevFields => ({
            ...prevFields,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="card">
            <div className="card-header">
                <h5>{field.isExistingField ? 'Edit Field' : 'Add Field'}: {formField.id}</h5>                
                <a onClick={() => displayAddEditForm(false)}>
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                </a>                
            </div>
            <div className="card-body">
                <form onSubmit={ (e) => e.preventDefault()} >
                    <CheckboxInput label="Visible" name="visible" checked={formField.visible} field={formField} onChange={handleChange} helpText="Used to set the visibility of the field in form" />

                    <CheckboxInput label="Required" name="required"  checked={formField.required} field={formField} onChange={handleChange} helpText="Used to set if the field is mandatory in form" />

                    <NumberInput className="field-order" label="Order" name="order" value={formField.order} field={formField} onChange={handleChange} required={true} placeholder = "Enter order..." helpText="Used to set the order of the field in form" />

                    <TextInput label="Field Name / Label" name="label" value={formField.label} onChange={handleChange} required={true} placeholder = "Enter Field Name / Label..." helpText="Used to set the label of the field in form" />

                    <SelectInput label="Type" name="type" value={formField.type} required={true} onChange={handleChange} helpText="Use to set the type of field in form" options={types} />

                    <div className="form-button-group">
                        <button type="button" onClick={()=> displayAddEditForm(false)} className="btn btn-secondary">Cancel</button>
                        <button type="submit" onClick={()=>saveFormField(formField)} className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEditForm;
