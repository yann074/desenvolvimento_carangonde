import React from 'react'
import group from '../assets/hand.svg'
import house from '../assets/house.svg'
import human from '../assets/training.svg'
import env from '../assets/environment.svg'
import sum from '../assets/sum.svg'
import './styles/Actions.css'
export const Actions = () => {
  return (
    <>
    <section className='sections-actions'>
        <h2>O que fazemos</h2>
        <h6>Na nossa ONG, sabemos que o conhecimento é o poder que 
            impulsiona mudanças reais. É hora de fazer a diferença</h6>

            <div>
                <div>
                    <img src={group} alt="" />
                    <h2>CIDADANIA E REDE<span><img src={sum} alt="" /></span></h2>
                </div>
                <div>
                    <img src={house} alt="" />
                    <h2>CONSTRUÇÃO DE UNIDADES HABITACIONAIS <span><img src={sum} alt="" /></span> </h2>
                </div>
                <div>
                    <img src={env} alt="" />
                    <h2>IDENTIDADE E MEIO AMBIENTE <span><img src={sum} alt="" /></span> </h2>
                </div>
                <div>
                    <img src={human} alt="" />
                    <h2>CAPACITAÇÃO E EMPODERAMENTO<span><img src={sum} alt="" /></span> </h2>
                </div>
            </div>
    </section>
    </>
  )
}
