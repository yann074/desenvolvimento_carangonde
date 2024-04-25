import React from 'react'
import logo from "../../assets/logo_carangonde.svg"
import human from "../../assets/human.svg"
import calen from "../../assets/calen.svg"

import { Link } from 'react-router-dom'
import profile from "../../assets/profile.svg"
import { Peoples } from './Peoples'
import { Footer } from '../../components/Footer'
import img_1 from '../../assets/img_1.svg'
import './Admin_nav.css' 


export const Admin = () => {
  return (
    <>
       <header className='container-header-main'>
            <div>
                <nav className='container-headeradm'>
                  <div className='container-header-logo'>
                      <img src={logo} alt="" />
                      <h2>Instituto Carangondé Cidadania</h2>
                  </div>
                    
                    <ul>
                        <li > <img  src={human} alt="" /> <a href="" className='componets_adm'>Inscritos</a></li>
                        <li ><img src={calen} alt="" /> <a href="" className='componets_adm'>Calendário</a></li>
                        <li ><img src={profile} alt="" /> <a href="" className='componets_adm'>Perfil do Adm</a></li>
                    </ul>
                </nav>
            </div>
            <Link to={"/"} className='button-home'><p>Página Inicial</p></Link>
       </header>

       <div>
        <Peoples/>
       </div>

       <footer className='footer-admin'>
           <Footer />
        </footer>
    </>
  )
}
