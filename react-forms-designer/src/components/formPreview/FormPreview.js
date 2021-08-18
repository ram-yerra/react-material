import React from 'react';

import TextInput from '../common/formFields/textInput/TextInput';
import TextAreaInput from '../common/formFields/textAreaInput/TextAreaInput';
import CheckboxInput from '../common/formFields/checkboxInput/CheckboxInput';
import SelectInput from '../common/formFields/selectInput/SelectInput';
import MultiSelectInput from '../common/formFields/multiSelectInput/MultiSelectInput';

import useFormFields from '../../hooks/useFormFields';


const FormPreview = () => {
    const { fields } = useFormFields();
    console.log(fields);
    return (
        <div className="form-preview-wrapper">
            <div className="card">
                <div className="card-header">
                    <h5>Form Preview</h5>
                </div>
                <div className="card-body">
                    <form>
                        {fields.length > 0 && fields.map((field) => (
                            <React.Fragment key={field.id}>
                                {((field) => {
                                    switch(field.type) {
                                        case 'text': 
                                            return (<TextInput 
                                                        label={field.label} 
                                                        required={field.required}>
                                                    </TextInput>);
                                        case 'textArea':
                                            return (<TextAreaInput
                                                        label={field.label} 
                                                        required={field.required}>                                                
                                                    </TextAreaInput>);
                                        case 'checkBox':
                                            return (<CheckboxInput
                                                        label={field.label} 
                                                        required={field.required}>                                            
                                                    </CheckboxInput>);
                                        case 'dropdown':
                                            return (<SelectInput
                                                        label={field.label} 
                                                        required={field.required}>
                                                    </SelectInput>);
                                        case 'multiSelect':
                                            return (<MultiSelectInput
                                                        label={field.label} 
                                                        required={field.required}>
                                                    </MultiSelectInput>);
                                        default: 
                                            return (<h1>Invalid Field type</h1>);
                                    }
                                })(field)}  
                            </React.Fragment>
                        ))}                        
                        {/* <TextAreaInput></TextAreaInput>
                        <NumberInput></NumberInput>
                        <CheckboxInput></CheckboxInput>
                        <SelectInput></SelectInput>
                        <MultiSelectInput></MultiSelectInput> */}
                    </form>
                </div>
            </div>            
        </div>
    )
}

export default FormPreview;