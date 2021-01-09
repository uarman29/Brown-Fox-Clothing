import React from 'react';

import './FormInputComponent.css';

const FormInputComponent = ({handleChange, label, ...otherProps}) =>
{
    return(
        <div className = "group">
            <input className="form-input" onChange={handleChange} {...otherProps}/>
            {
                label ? 
                <label className={`form-input-label ${otherProps.value.length ? 'shrink':''}`}> {label} </label> 
                : null
            }
        </div>
    );
}

export default FormInputComponent;