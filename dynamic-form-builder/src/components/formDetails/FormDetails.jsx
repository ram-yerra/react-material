import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';
import { previewForm } from '../../redux/actions/formActions';
import { useHistory } from 'react-router-dom';
import './FormDetails.styl';
import AddEditFormField from '../addEditFormField/AddEditFormField';
import TextInput from '../common/formFields/textInput/TextInput';
import TextAreaInput from '../common/formFields/textAreaInput/TextAreaInput';
import FbModal from '../common/fbModal/FbModal';

const FormDetails = ({form, previewForm}) => {
    const history = useHistory();
    const [ showPreviewButtonClicked, setShowPreviewButtonClicked ] = useState(false);
    const [ showAddEditFormFieldModal, setShowAddEditFormFieldModal ] = useState(false);
    const [ title, setTitle ] = useState('Form Details');
    const [ isAddEditMode, setIsAddEditMode ] = useState(false);
    let { id } = useParams();
    console.log(id);
    useEffect(() => {
        (async() => {
            if (id === 'add') {
                setTitle('Add Form');
                setIsAddEditMode(true);
                return;
            }
            await previewForm(id).catch(error => {
                console.log(error);
            });
            console.log(form);
        })();
    }, []);
    const previewFormFields = () => {
        setShowPreviewButtonClicked(true);
    };
    const addFormField = () => {
        setShowAddEditFormFieldModal(true);
    };
    const closeFormFieldModal = () => {
        setShowAddEditFormFieldModal(false);
    };
    const handleChange = () => {
        console.log('on change');
    };
    const saveForm = () => {
        console.log('saving...');
    };
    const cancelForm = () => {
        history.push('/forms');
        console.log('cancelling form...');
    };
    return (
        <div className="form-details-container">
            <div className="form-details-wrapper">
                <div className="form-details-header">
                    <h3>{title}</h3>
                    {isAddEditMode && 
                        <div className="form-button-wrapper">
                            <button onClick={cancelForm} className="button secondary-button">Cancel</button>
                            <button onClick={saveForm} className="button">Save</button>                            
                        </div>
                    }
                </div>
                <div className="form-details-content">
                    {!isAddEditMode && 
                    <>
                        <div className="form-name">
                            <span className="label">Name: </span>
                            <span>{form.name}</span>                        
                        </div>
                        <div className="form-description">
                            <span className="label">Description: </span>
                            <span>{form.description}</span>
                        </div>
                    </>
                    }
                    {isAddEditMode && 
                        <form>
                            <TextInput label="Form name" name="label" value={form.name} onChange={handleChange} required={true} placeholder = "Enter form name..." helpText="Used to set the name of the form" />
                            <TextAreaInput label="Form description" name="label" value={form.description} onChange={handleChange} required={false} placeholder = "Enter form description..." helpText="Used to set the description of the form" />
                        </form>                        
                    }
                    <div className="form-fields-header">
                        <span className="label">Form Fields: </span>
                        <span className="fields-button-wrapper">
                            <button onClick={addFormField} className="button">Add Field</button>
                            {!isAddEditMode && <button onClick={previewFormFields} className="button">Preview Form</button>}
                        </span>
                    </div>
                    <div className="form-fields-wrapper">
                        <div className="grid-header flex-grid">
                            <div className="list-col list-col-10">#</div>
                            <div className="list-col list-col-50">Label</div>
                            <div className="list-col list-col-10">Order</div>
                            <div className="list-col list-col-10">Visible</div>
                            <div className="list-col list-col-10">Required</div>
                            <div className="list-col list-col-10">Type</div>
                        </div>
                        {form && form.fields && form.fields.length > 0 && form.fields.map((field, index) => (
                            <div className="grid-content flex-grid" key={field._id}>
                                <div className="list-col list-col-10">{index+1}</div>
                                <div className="list-col list-col-50">{field.label}</div>
                                <div className="list-col list-col-10">{field.order}</div>
                                <div className="list-col list-col-10">{field.visible.toString()}</div>
                                <div className="list-col list-col-10">{field.required.toString()}</div>
                                <div className="list-col list-col-10">{field.type}</div>
                            </div>
                        ))}
                        {form && !form.fields && 
                            <div className="empty-list-container">
                                <p>No fields have been added yet!</p>
                            </div>
                        }
                    </div>
                </div>
            </div>   
            {showAddEditFormFieldModal && (
                <FbModal title="Add Field" onModalClose={closeFormFieldModal} onClose={closeFormFieldModal} onChange={handleChange} bodyComponent={<AddEditFormField></AddEditFormField>} />
            )}        
        </div>
    )
};

FormDetails.propTypes = {
    form: PropTypes.object.isRequired,
    previewForm: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        form: state.formsReducer.form
    };
};

const mapDispatchToProps = {
    previewForm
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDetails);