import React, { useState, useEffect } from 'react';


const TextInput = ({ label = 'Example Text Input', name = 'text', value='', placeholder = 'Enter text...', required = false, helpText = 'Example text input help text', disabled = false,  onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input name={name} type="text" className="form-control" id={name} defaultValue={value} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} aria-describedby={`${name}HelpBlock`} />
            <small id={`${name}HelpBlock`} className="form-text text-muted">{helpText}</small>
        </div>
    )
};


export default TextInput;