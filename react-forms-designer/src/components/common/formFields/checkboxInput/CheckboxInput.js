import React from 'react';

import './CheckboxInput.scss';


const CheckboxInput = ({ label = 'Example Checkbox', name = 'Checkbox', helpText = 'Example help text', disabled = false, value = false, checked = false, onChange }) => {
    return (
        <div className="form-group">
            <input name={name} disabled={disabled} type="checkbox" className="form-check-input" onChange={onChange} value={value} defaultChecked={checked} id={name} aria-describedby={`${name}HelpBlock`} />
            <label className="form-check-label" htmlFor={name}>{label}</label>
            <small id={`${name}HelpBlock`} className="form-text text-muted">{helpText}</small>
        </div>
    )
};


export default CheckboxInput;