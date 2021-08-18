import React from 'react';


const SelectInput = ({ label = 'Example Select Input', value = '', name = 'select', required = false, helpText = 'Example select help text', disabled = false,  onChange, options = [{value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}, {value: 4, label: '4'}, {value: 5, label: '5'}] }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} onChange={onChange} required={required} disabled={disabled} className="form-control" id={name} aria-describedby={`${name}HelpBlock`}>
                {options.map((val, i) => { 
                    return <option key={val.value} value={val.value}>{val.label}</option>
                })}
            </select>
            <small id={`${name}HelpBlock`} className="form-text text-muted">{helpText}</small>
        </div>
    )
};


export default SelectInput;