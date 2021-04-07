import React from 'react'

import './styles.css'

function Input({ label, placeholder }) {
    return (
        <div className="input">
            <label htmlFor="name"> {label} </label>
            <input type="text"
                placeholder={placeholder}
            /> 
        </div>
    )
}

export default Input
