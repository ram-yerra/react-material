import React from 'react';
import './FormDesigner.scss';

import FormFieldsList from '../formFieldsList/FormFieldsList';
import AddEditForm from '../addEditForm/AddEditForm';

import useFormFields from '../../hooks/useFormFields';


const FormDesigner = () => {
    const { isEditMode } = useFormFields();
    return (            
        <div className="form-designer-container">
            <div className="form-designer-wrapper">
                <FormFieldsList />
            </div>
            {isEditMode && (             
                <div className="add-edit-form-wrapper">
                    <AddEditForm />
                </div>                
            )}
        </div>
    )
};


export default FormDesigner;
