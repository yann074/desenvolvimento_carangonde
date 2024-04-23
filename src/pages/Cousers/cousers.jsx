import { Headerl } from '../../components/Headerl'
import './Cousers.css'
import { MyCourses } from './static/MyCourses'
import { Footer } from '../../components/Footer'

import React from 'react'
export const Cousers = () => {
  return (
    <>
      <div className='bg-grey'>
        <Headerl />
        <main className='container-main-presentation'>
          <div className='container-presentation'>
            <div className='container-text-presentation'>
              <h1>Aprimore
                Suas Habilidades Com Os Nossos Cursos
              </h1>
            </div>
            <div className='button-presentation'>
              <button >Vamos Aprender</button>
            </div>
          </div>
        </main>
        <figure className='img-presentation'>
        </figure>
      </div>
      <section >
        <ul className='section-black'>
          <li><span>+100</span>Famílias Ajudadas </li>
          <li>|</li>
          <li><span>+10</span>Casas Entregues </li>
          <li>|</li>
          <li><span>+20</span>Cursos Dispníveis</li>
        </ul>
        <MyCourses />

        <Footer />
      </section>

    </>
  )
}
