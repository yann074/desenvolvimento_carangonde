import React from 'react'
import insta from '../assets/logo_insta.svg'
import wpp from '../assets/logo_wpp.svg'
import cp from '../assets/groupcp.svg'
import './styles/footerl.css'

export const Footer = () => {
  return (
    <>
    <section className='container-footer'>
        <hr />
        <h2>Instituto Carangondé Cidadania</h2>
        <div>
            <ul className='container-options1'>
                <li>Quem Somos </li>
                <li>|</li>
                <li>Faça uma doação </li>
                <li>|</li>
                <li>Fale Conosco</li>
            </ul>    
        </div>
        <div>
        <div className='container-icons'>
            <img src={insta} alt="" />
            <img src={wpp} alt="" />
        </div>
        </div>
        <hr />
        <h4>(xx) xxxx-xxxx</h4>
        <h6 className='h6_txt'> <img src={cp} alt="" /> 2024 Todos os direitos reservados</h6>
    </section>
    </>
  )
}
