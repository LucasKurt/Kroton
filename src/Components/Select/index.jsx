import React from 'react'

import './styles.css'

function Select({ label, placeholder }) {
    return (
        <div className="select">
            <label htmlFor="name"> {label} </label>
            <select name="" id="">
                <option value="">Selecione</option>
            </select> 
        </div>
    )
}

export default Select
