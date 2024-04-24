import React from 'react'
import logo from "../../assets/logo_carangonde.svg"
import human from "../../assets/human.svg"
import calen from "../../assets/calen.svg"
import profile from "../../assets/profile.svg"
import { Peoples } from './Peoples'
import { Footer } from '../../components/Footer'
import './Admin_nav.css' 


export const Admin = () => {
  return (
    <>
       <header className='container-header-main'>
            <div>
                <nav className='container-headeradm'>
                    <img src={logo} alt="" />
                    <h2>Instituto Carangondé Cidadania</h2>
                    <ul>
                        <li > <img  src={human} alt="" /> <a href="" className='componets_adm'>Inscritos</a></li>
                        <li ><img src={calen} alt="" /> <a href="" className='componets_adm'>Calendário</a></li>
                        <li ><img src={profile} alt="" /> <a href="" className='componets_adm'>Perfil do Adm</a></li>
                    </ul>
                </nav>
            </div>
            <button>PÁGINA INICIAL</button>
       </header>

       <footer className='footer-admin'>
            
            <Footer/>
        </footer>
    </>
  )
}
