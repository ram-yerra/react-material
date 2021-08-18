import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loadForms, deleteForm } from '../../../../redux/actions/formActions';
import './FormsList.styl';

const FormsList = ({ forms, loadForms, deleteForm }) => {
    const history = useHistory();
    useEffect(() => {
        console.log('loading forms');
        loadForms().catch(error => {
            console.log('Error while fetching forms:', error);
        });
        console.log(JSON.stringify(forms));
    }, []);
    const handleDeleteClick = (form) => {
        console.log('Deleting form:',form._id);
        deleteForm(form._id).catch(error => {
            console.log('Error while deleting form:', error);
        });
    };
    const handleDetailsClick = (form) => {
        console.log('Previewing form:', form._id);
        history.push('/forms/' + form._id);
    };
    const addNewForm = () => {
        console.log('Adding new form');
        history.push('/forms/add');
    };
    return (
        <>
            <div className="forms-list-title">
                <h3>Forms List</h3>
                <button className="button" onClick={addNewForm}>Add Form</button>
            </div>
            <div className="grid-header flex-grid">
                <div className="list-col list-col-10">#</div>
                <div className="list-col list-col-30">Name</div>
                <div className="list-col list-col-40">Description</div>
                <div className="list-col list-col-10">Details</div>
                <div className="list-col list-col-10">Delete</div>
            </div>
            {forms.length > 0 && forms.map((form, index) => (
                <div className="grid-content flex-grid" key={form._id}>
                    <div className="list-col list-col-10">{index+1}</div>
                    <div className="list-col list-col-30">{form.name}</div>
                    <div className="list-col list-col-40">{form.description}</div>
                    <div className="list-col list-col-10">
                        <a className="link" onClick={() => handleDetailsClick(form)}>Details</a>
                    </div>
                    <div className="list-col list-col-10">
                        <a className="link" onClick={() => handleDeleteClick(form)}>Delete</a>
                    </div>
                </div>
            ))}
        </>
    );
};

FormsList.propTypes = {
    forms: PropTypes.array.isRequired,
    loadForms: PropTypes.func.isRequired,
    deleteForm: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        forms: state.formsReducer.forms
    };
};

const mapDispatchToProps = {
    loadForms,
    deleteForm
};

export default connect(mapStateToProps, mapDispatchToProps)(FormsList);