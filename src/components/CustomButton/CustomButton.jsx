import React from 'react';

import './CustomButton.scss'

//we need to pull the children off props that gets passed into custom button
//then destrcutre props in otherprops
//spread that into custom button, if we have type submit passed into custom button
//button will get that
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button 
    className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} 
    {...otherProps}>
        {children}
    </button>
)

export default CustomButton