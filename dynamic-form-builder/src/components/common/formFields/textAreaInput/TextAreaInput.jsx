import React from 'react';


const TextAreaInput = ({ label = 'Example Text area input', value = '', name = 'textarea', placeholder = 'Enter text area', required = false, helpText = 'Example text area help text', disabled = false, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
                { required && <span className="required">*</span>}
            </label> 
            <textarea name={name} className="form-control" id={name} rows="3" defaultValue={value} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} aria-describedby={`${name}HelpBlock`}></textarea>
            <small id={`${name}HelpBlock`} className="form-text text-muted">{helpText}</small>
        </div>
    )
};


export default TextAreaInput;