import React, { useState } from 'react';

const FbModal = React.lazy(() => import('../../../common/components/fbModal/FbModal'));
const AddEditFormField = React.lazy(() => import('../addEditFormField/AddEditFormField'));

const AddEditForm = () => {
    const [ formField, setFormField ] = useState({});
    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        setFormField(prevFields => ({
            ...prevFields,
            [name]: type === 'checkbox' ? checked : value
        }));
        console.log(formField);
    };
    const [isOpen, setIsOpen] = useState(false);
    const showFormFieldModal = () => {
        setIsOpen(true);
    };
    const closeFormFieldModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div className="form-details-header">
                <h3>Add Form</h3>
            </div>
            <button onClick={showFormFieldModal}>Add Field</button>
            {isOpen && <FbModal title="Sample title" onModalClose={closeFormFieldModal} onChange={handleChange} formField={formField} bodyComponent={<AddEditFormField />} />}
        </>
    );
}

export default AddEditForm;