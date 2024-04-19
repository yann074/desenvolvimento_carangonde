import React from 'react'
import dollar from '../assets/dollar.svg'
import group from '../assets/group.svg'
import water from '../assets/water.svg'
import './styles/Valuel.css'

export const Value = () => {
  return (
    <>
    <section>
        <h2>NOSSOS VALORES</h2>
        <div className='container-blocks'>
            <div>
                <img src={dollar} alt="" />
                <p>Uma organização social sem fins lucrativos</p>
            </div>
            <div>
                <img src={group} alt="" />
                <p>Entregamos cidadania as pessoas em situação de vulnerabilidade social</p>
            </div>
            <div>
                <img src={water} alt="" />
                <p>Facilitamos o seu acesso aos serviços públicos</p>
            </div>
        </div>

    </section>
    
        <section className='container-deleted'>
            <div>
                <h2>Visão</h2>
                <p>Almejamos um futuro onde cada pessoa, independentemente de sua
                    origem ou condição socioeconômica, tenha acesso a moradias dignas
                    e sustentáveis, promovendo assim a construção de comunidades mais
                    justas, solidárias e conscientes de seu papel na sociedade.</p>
            </div>
            <div>
                <h2>Missão</h2>
                <p>Promover qualidade de vida e cidadania a jovens e adulto 
                    por meio da construção de moradia digna e qualificação 
                    profissional, priorizando a educação, o desenvolvimento 
                    sustentável e a preservação das culturas como forma de 
                    transformação social e fortalecimento da identidade.</p>
            </div>
            <div>
                <h2>Três Valores</h2>
                <div>
                    <ul>
                        <li>União</li>
                        <li>Comprometimento</li>
                        <li>Valorização</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}
