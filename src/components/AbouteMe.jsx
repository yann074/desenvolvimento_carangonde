import React from 'react'
import img_action from '../assets/img_action.svg'
import './styles/AbouteMel.css'

export const AbouteMe = () => {
  return (
    <>
    <section className='container-us'>
        <div className='container-img-action'>
            <img src={img_action} alt="" />
        </div>
        <div className='container-text-us'>
            <h2>UM POUCO DE NÓS</h2>
            <p>A nossa ONG Carangondé tem por finalidades incentivar, promover e apoiar a defesa, 
                preservação e conservação do meio ambiente, promoção e apoio ao desenvolvimento 
                sustentável, promoção e provisão de moradia digna e promoção e preservação das culturas 
                tradicionais, apoio a promoção de ações sociais que promovam a cidadania.</p>
        </div>
    </section>
    </>
  )
}
