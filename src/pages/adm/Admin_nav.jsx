import React from 'react'
import logo from "../../assets/logo_carangonde.svg"
import human from "../../assets/human.svg"
import calen from "../../assets/calen.svg"
import profile from "../../assets/profile.svg"
import { Peoples } from './Peoples'

export const Admin = () => {
  return (
    <>
        <section>
            <div>
                <nav>
                    <div>
                        <img src={logo} alt="Logo carangonde" />
                        <h2>Instituto Carangondé Cidadania</h2>
                        <button>Página Inicial</button>
                    </div>
                    <ul>
                        <li><img src={human} alt="" />Inscritos</li>
                        <li><img src={calen} alt="" /> Calendário</li>
                        <li><img src={profile} alt="" /> Perfil do Adm</li>
                    </ul>
                </nav>
                <Peoples />
            </div>
          
            </section>
    </>
  )
}
