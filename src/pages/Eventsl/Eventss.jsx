import React from 'react'
import { Headerl } from '../../components/Headerl'
import { Footer } from '../../components/Footer'
import '../stylespage/initial.css'
import '../../pages/stylespage/initial.css'

import './Eventos.css'
export const Eventss = () => {
  return (
   <>
    <section className='container-events-section'>
        <div className='bg-gray'>
            <Headerl />
            <div className='container-texts'>
                <h1 className='h1-principal'>EVENTOS</h1>
                <p className='texto-principal'>Junte-se a nós e faça parte de uma <br />comunidade vibrante e dinamica, onde os <br /> eventos são apenas o começo</p>
            </div>
        </div>
        <section className='grid-container'>
            <div className='container-div'>
                <div className='vazio-branco'>
                    <h1> 04</h1> <span> ABRIL</span>
                </div>
                <div className='texto-eventos'>
                    <h2>MULHERES GUERREIRAS</h2>
                        <p>Uma live feita no instagram para contar histórias 
                        e vivências de mulheres e juntá-las cada vez mais.</p>
                </div>
                <div className='vazio-branco'>
                    <h1> 15</h1> <span> ABRIL</span>
                </div>
                <div className='texto-eventos'>
                    <h2>CINEMA</h2>
                        <p>2 vezes no mês nos reunimos para ir ao cinema 
                        pelo menos 2 dias no mês.</p>
                </div>
                <div className='vazio-branco'>
                    <h1> 25</h1> <span> ABRIL</span>
                </div>
                <div className='texto-eventos'>
                    <h2>CINEMA</h2>
                        <p>2 vezes no mês nos reunimos para ir ao cinema 
                        pelo menos 2 dias no mês.</p>
                </div>
            </div>
        </section>
            <footer>
                <Footer />
            </footer>
    </section>
   </>
  )
}