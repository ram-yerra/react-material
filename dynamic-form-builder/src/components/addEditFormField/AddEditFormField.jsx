import React, { useState } from 'react';
import CheckboxInput from '../common/formFields/checkboxInput/CheckboxInput';
import NumberInput from '../common/formFields/numberInput/NumberInput';
import TextInput from '../common/formFields/textInput/TextInput';
import SelectInput from '../common/formFields/selectInput/SelectInput';

const AddEditFormField = ({ formField = {}, onChange }) => {
    const types = [
        { value: 'text', label: 'Text' },
        { value: 'textArea', label: 'Text Area' },
        { value: 'dropdown', label: 'Dropdown' },
        { value: 'multiSelect', label: 'Multiselect' },
        { value: 'checkBox', label: 'Checkbox' }
    ];

    return (
        <form className="align-left">
            <CheckboxInput label="Visible" name="visible" checked={formField.visible} field={formField} onChange={onChange} helpText="Used to set the visibility of the field in form" />
            <CheckboxInput label="Required" name="required"  checked={formField.required} field={formField} onChange={onChange} helpText="Used to set if the field is mandatory in form" />
            <NumberInput className="field-order" label="Order" name="order" value={formField.order} field={formField} onChange={onChange} required={true} placeholder = "Enter order..." helpText="Used to set the order of the field in form" />
            <TextInput label="Field Name / Label" name="label" value={formField.label} onChange={onChange} required={true} placeholder = "Enter Field Name / Label..." helpText="Used to set the label of the field in form" />
            <SelectInput label="Type" name="type" value={formField.type} required={true} onChange={onChange} helpText="Use to set the type of field in form" options={types} />                    
        </form>
)}

export default AddEditFormField;