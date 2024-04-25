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
        <div className='div-action'>
            <h2>O que fazemos</h2>
            <h6>Na nossa ONG, sabemos que o conhecimento é o poder que
                impulsiona mudanças reais. É hora de fazer a diferença</h6>
        </div>

            <div className='container-actions'>
                <div className='op'>
                    <img src={group} alt="" className='img' />
                    <div  className='op-text'>
                        <h2>CIDADANIA E REDE</h2>
                        <span className='sum-txt'><img src={sum} alt="" /></span>
                    </div>
                </div>
                <div className='op'>
                    <img src={house} alt="" className='img' />
                    <div className='op-text'>
                        <h2>CONSTRUÇÃO DE UNIDADES HABITACIONAIS </h2>
                        <span className='sum-txt'><img src={sum} alt="" /></span>
                    </div>
                </div>
                <div className='op'>
                    <img src={env} alt=""  className='img' />
                    <div  className='op-text'>
                        <h2>IDENTIDADE E MEIO AMBIENTE</h2>
                        <span className='sum-txt'><img src={sum} alt="" /></span>
                    </div>
                </div>
                <div className='op'>
                    <img src={human} alt="" className='img'  />
                    <div  className='op-text'>
                        <h2>CAPACITAÇÃO E EMPODERAMENTO</h2>
                        <span className='sum-txt'><img src={sum} alt="" /></span>
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}
