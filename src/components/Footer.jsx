import React from 'react'
import insta from '../assets/logo_insta.svg'
import wpp from '../assets/logo_wpp.svg'
import { Link } from 'react-router-dom'
import cp from '../assets/groupcp.svg'
import './styles/footerl.css'

export const Footer = () => {
  return (
    <>
    <section className='container-footer' id='footer'>
        <hr />
        <h2>Instituto Carangondé Cidadania</h2>
        <div>
            <ul className='container-options1'>
                <li><Link to="/">Quem Somos</Link> </li>
                <li>|</li>
                <li><Link to={"/"}>Faça uma doação</Link> </li>
                <li>|</li>
                <li><a href="https://www.instagram.com/carangondecidadania_fsa/" target='_blank'>Fale Conosco</a></li>
            </ul>    
        </div>
        <div>
        <div className='container-icons'>
           <a href="http://localhost:5173/coursers#cursos" target='_blank'><img src={insta} alt="" /> </a>
            <a href="https://wa.me/7599290292" target='_blank'><img src={wpp} alt="" /></a>
        </div>
        </div>
        <hr />
        <h4>(75) 9929-0292</h4>
        <h6 className='h6_txt'> <img src={cp} alt="" /> 2024 Todos os direitos reservados</h6>
    </section>
    </>
  )
}
