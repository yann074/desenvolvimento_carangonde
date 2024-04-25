import React from 'react'
import img_1 from '../assets/img_1.svg'
import './styles/Presentation.css'
import { Link } from 'react-router-dom'



export const Presentation = () => {
  return (
    <>
    <div data-aos="fade-right">
    <section className='container-section-presentation'>
        <div className='container-presentation'>
            <div className='container-text-presentation'>
                <h1>Construindo Esperança, Erguendo Lares: <span className='text-yellow'>Juntos </span>
                    Transformamos Vidas <span className='text-yellow'>Na Zona Rural</span>    
                </h1>
            </div>
            <div className='button-presentation'>
                <Link to="/register">Cadastre-se</Link>
            </div>
        </div>
        <div className='img-presentation'>
            <img src={img_1} alt="aula" />
        </div>
    </section>
    </div>
    
    </>
  )
}

