import React from 'react'
import img_1 from '../assets/img_1.svg'
import './styles/Presentation.css'



export const Presentation = () => {
  return (
    <>
    <section>
        <div className='container-presentation'>
            <div className='container-text-presentation'>
                <h1>Construindo Esperança, Erguendo Lares: <span className='text-yellow'>Juntos</span>
                    Transformamos Vidas <span className='text-yellow'>Na Zona Rural</span>    
                </h1>
            </div>
            <div className='button-presentation'>
                <button>Cadastre-se</button>
            </div>
        </div>
        <div className='img-presentation'>
            <img src={img_1} alt="aula" />
        </div>
    </section>

    
    </>
  )
}

