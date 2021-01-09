import React from 'react';

import './CustomButtonComponent.css';

const CustomButtonComponent = ({children, ...otherProps}) =>
{
    return(
        <button className="custom-button" {...otherProps} >
            {children}
        </button>
    );
};

export default CustomButtonComponent;