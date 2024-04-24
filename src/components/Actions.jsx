import React from 'react'
import group from '../assets/hand.svg'
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
                    <h2>CIDADANIA <span><img src={sum} alt="" /></span> E REDE</h2>
                </div>
            </div>
    </section>
    </>
  )
}
