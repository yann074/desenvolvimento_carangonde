import React, { useState } from 'react';
import { Headerl } from '../../components/Headerl';
import './Cousers.css';
import { MyCourses } from './static/MyCourses';
import { Footer } from '../../components/Footer';

export const Cousers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='bg-grey'>
        <Headerl />
        <main className='container-main-presentation'>
          <div className='container-presentation'>
            <div className='container-text-presentation'>
              <h1><span className='outline-yellow'>Aprimore</span> Suas Habilidades Com Os <span className='outline-yellow'>Nossos Cursos</span></h1>
            </div>
            <div className='button-presentationnnn'>
              <a href="#cursos">Vamos Aprender</a>
            </div>
          </div>
        </main>
        <figure className='img-presentation'></figure>
      </div>
      <section>
        <div data-aos="fade-right">
          <ul className='section-black'>
            <li><span>+100</span> Famílias Ajudadas </li>
            <li>|</li>
            <li><span>+10</span> Casas Entregues </li>
            <li>|</li>
            <li><span>+20</span> Cursos Disponíveis</li>
          </ul>
        </div>
        <div data-aos="fade-right">
          <MyCourses openModal={openModal} />
        </div>
        <Footer />
      </section>
      {isModalOpen && <Modal course={selectedCourse} closeModal={closeModal} />}
    </>
  );
};