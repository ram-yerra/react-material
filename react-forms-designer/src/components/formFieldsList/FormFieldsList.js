import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './FormFieldsList.scss';

import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useFormFields from '../../hooks/useFormFields';

const FormFieldsList = () => {
    const { setFormFieldId, fields } = useFormFields();

    useEffect((fieldsList) => {
        console.log('fields updated:'+fieldsList);
    }, [fields]);
    return (
        <div className="form-designer-container">
            <div className="card">
                <div className="card-header">
                    <h5>Form Designer</h5>
                </div>
                <div className="card-body">
                    <div className="card-body-title">
                        <h6 className="card-title">All Fields</h6>
                        <Link className="btn btn-outline-info" to="/preview-form">
                            <FontAwesomeIcon icon={faSearch} /> 
                            Preview Form
                        </Link>
                    </div>  
                    <div className="form-fields-table">                    
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Order</th>
                                    <th scope="col">Field Name / Label</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Visible</th>
                                    <th scope="col">Required</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fields.length > 0 && fields.map((field)=>(                                    
                                    <tr className="row-selection" onClick={() => setFormFieldId(field.id)} key={field.order}>
                                        <th scope="row">{field.order}</th>
                                        <td>{field.label}</td>
                                        <td>{field.type}</td>
                                        <td>{field.visible.toString()}</td>
                                        <td>{field.required.toString()}</td>
                                    </tr>                                    
                                ))}
                                {fields.length === 0 && <tr>                            
                                    <td colSpan="5">
                                        <div className="empty-fields-table">
                                            No fields have been added yet!
                                        </div>
                                    </td>
                                </tr>}
                            </tbody>
                        </table>
                    </div> 
                    <div className="add-field-wrapper">
                        <button type="button" className="btn btn-outline-primary" onClick={()=> setFormFieldId()}>
                            <FontAwesomeIcon icon={faPlus} /> Add Field
                        </button>
                    </div>                 
                </div>
            </div>
            
        </div>
    )
};


export default FormFieldsList;