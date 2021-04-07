import React from 'react'

import './styles.css'

function Card() {
    return (
        <div className="card">
            <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt=""/>
            
            <div className="card-body">
                <p>Texto .........</p>
                <h1>Titulo.......</h1>
                <button>Acessar</button>
            </div> 
        </div>
    )
}

export default Card
