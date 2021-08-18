import React from 'react';

import './CheckboxInput.styl';


const CheckboxInput = ({ label = 'Example Checkbox', name = 'Checkbox', helpText = 'Example help text', disabled = false, required = false, value = false, checked = false, onChange }) => {
    return (
        <div className="form-group">
            <input name={name} disabled={disabled} type="checkbox" className="form-check-input" onChange={onChange} value={value} defaultChecked={checked} id={name} aria-describedby={`${name}HelpBlock`} />
            <label className="form-check-label" htmlFor={name}>
                {label}
                { required && <span className="required">*</span>}
            </label> 
            <small id={`${name}HelpBlock`} className="form-text text-muted">{helpText}</small>
        </div>
    )
};


export default CheckboxInput;