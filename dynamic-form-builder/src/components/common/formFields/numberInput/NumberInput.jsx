import React from 'react';


const NumberInput = ({ label = 'Example Number Input', name = 'number', value = '', placeholder = 'Enter number...', required = false, helpText = 'Example number help text', disabled = false, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
                { required && <span className="required">*</span>}
            </label> 
            <input name={name} type="number" className="form-control" id={name} defaultValue={value} placeholder={placeholder} onChange={onChange} required={required} disabled={disabled} aria-describedby={`${name}HelpBlock`} />
            <small id={`${name}HelpBlock`} className="form-text text-muted">{helpText}</small>
        </div>
    )
};


export default NumberInput;