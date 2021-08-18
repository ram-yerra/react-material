import React from 'react';


const MultiSelectInput = ({ label = 'Example Multi-select', name = 'multiselect', value = '', required = false, helpText = 'Example help text', disabled = false,  onChange, options = [{value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}, {value: 4, label: '4'}, {value: 5, label: '5'}] }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
                { required && <span className="required">*</span>}
            </label> 
            <select name={name} value={value} onChange={onChange} required={required} disabled={disabled} multiple className="form-control" id={name} aria-describedby={`${name}HelpBlock`}>
                {options.map((val, i) => { 
                    return <option key={val.value} value={val.value}>{val.label}</option>
                })}
            </select>
            <small id={`${name}HelpBlock`} className="form-text text-muted">{helpText}</small>
        </div>
    )
};


export default MultiSelectInput;