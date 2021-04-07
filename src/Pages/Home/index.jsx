import React from 'react'

import Card from '../../Components/Card'
import Input from '../../Components/Input'
import Select from '../../Components/Select'
import Titulo1 from '../../Components/Titulo1'

import './styles.css'

function Home() {
    return (
        <div className="container-fluid">
            <header>
                <img src="/img/fale conosco.png" alt="Fale Conosco"/>
            </header>

            <div className="container">
                <section className="section-1">
                    <Titulo1 
                        img="/img/img 1.png"
                    />
                    <Titulo1 
                        img="/img/img 2.png"
                    />
                </section>

                <section className="section-2">
                    <h1>Titulo 3</h1>
                    <form className="form">
                        <Input
                            label="Pergunta 1 ?"
                            placeholder="Digite a resposta"
                        />

                        <Input
                            label="Pergunta 2 ?"
                            placeholder="Digite a resposta"
                        />

                        <Select
                            label="Pergunta 3 ?"  
                        />

                        <button>
                            <p>Buscar......</p>
                            <img src="/img/lupa.png" alt=""/>
                        </button>
                    </form>
                </section>

                <h1 className="titulo-4">Titulo 4</h1>

                <section className="section-3">               
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </section>

                <a href=".">+ Carregar mais cursos</a>
            </div>            
        </div>
    )
}

export default Home
