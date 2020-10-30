import React from 'react'
import './FormInput.scss'

//functional component we do not want any state
const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className = 'group'>
        <input 
        className='form-input' 
        onChange={handleChange} 
        {...otherProps}
        />
        {label ?
            (<label 
            className={`${
                otherProps.value.length ? 'shrink' : ''
                } form-input-label `} 
            >
            {label}
            </label>)
            : null}
    </div>
)

//...otherprops is in signin component name, type, value, require
//ternary .......if developer pass in lavel we generate one otherwise we render nothing
// if our value is in we are going to apply class of shrink otherwise if not empty string form input lavel
//shrink property is if anytime user types something in(for browsers that will automcomplete)
export default FormInput