import React from 'react'

import './styles.css'

function Titulo1({ img }) {
    return (
        <article>
            <div className="box">
                <img className="img" src={img} alt=""/>
                <div className="content">
                    <h1>Titulo 1</h1>
                    <p>
                        Content..  ... content. ... content.. .. content.. .. content ..
                        content....content....content....content....content....
                        content....content....
                    </p>
                    <button>
                        Botão para detalhes....
                    </button>
                </div>
            </div>
            <button className="mobile">
                Botão para detalhes....
            </button>
        </article>
    )
}

export default Titulo1
