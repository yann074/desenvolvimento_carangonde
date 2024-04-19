import React from 'react'
import logo from "../assets/logo_carangonde.svg"
import './styles/Headerl.css'

export const Headerl = () => {
  return (
    <>
        <header>
            <div className='container-logo'>
                <img src={logo} alt="logo Carangode" />
                <h2>Instituto Carangondé Cidadania</h2>
            </div>
            <div className='container-options'>
                <ul>
                    <li>Ínicio</li>
                    <li>Quem Somos</li>
                    <li>Eventos</li>
                    <li>Contato</li>
                </ul>
                <button>Entrar</button>
            </div>
        </header>
    </>
  )
}
