import React, { useState } from 'react';
import group from '../assets/hand.svg';
import house from '../assets/house.svg';
import human from '../assets/training.svg';
import env from '../assets/environment.svg';
import sum from '../assets/sum.svg';
import Modal from './Modal';
import './styles/Actions.css';

export const Actions = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalColor, setModalColor] = useState('');
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [modalImage, setModalImage] = useState(null);

  const openModal = (title, message, color, image, e) => {
    const rect = e.target.getBoundingClientRect();
    setButtonPosition({ top: rect.top + rect.height / 2, left: rect.left + rect.width / 2 });
    setModalTitle(title);
    setModalMessage(message);
    setModalColor(color);
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className='sections-actions'>
        <div className='div-action'>
          <h2>O que fazemos</h2>
          <h6>Na nossa ONG, sabemos que o conhecimento é o poder que impulsiona mudanças reais. É hora de fazer a diferença</h6>
        </div>

        <div className='container-actions'>
          <div className='op' onClick={(e) => openModal('CIDADANIA E REDE', 'Nas vastas extensões rurais da Bahia, muitas famílias enfrentam desafios diários para acessar serviços básicos  como cidadãos. Nossa Instituição está empenhada em estender e juntar várias mãos solidárias nas diferentes comunidades que atuamos, oferecendo apoio em questões educacionais, ambientais, habitacionais e sociais.', '#FFB6C1', group, e)}>
            <img src={group} alt="" className='img' />
            <div className='op-text'>
              <h2>CIDADANIA E REDE</h2>
              <span className='sum-txt'><img src={sum} alt="" /></span>
            </div>
          </div>
          <div className='op' onClick={(e) => openModal('CONSTRUÇÃO DE UNIDADES HABITACIONAIS', 'Nos dedicamos a construir unidades habitacionais nas áreas rurais da Bahia, proporcionando um refúgio estável e confortável para aqueles que mais necessitam.', '#ADD8E6', house, e)}>
            <img src={house} alt="" className='img' />
            <div className='op-text'>
              <h2>CONSTRUÇÃO DE UNIDADES HABITACIONAIS</h2>
              <span className='sum-txt'><img src={sum} alt="" /></span>
            </div>
          </div>
          <div className='op' onClick={(e) => openModal('IDENTIDADE E MEIO AMBIENTE', 'Apoiar suas culturas valoriza sua contribuição para a conservação da biodiversidade e promove a harmonia entre humanos e natureza, protegendo territórios naturais', '#90EE90', env, e)}>
            <img src={env} alt="" className='img' />
            <div className='op-text'>
              <h2>IDENTIDADE E MEIO AMBIENTE</h2>
              <span className='sum-txt'><img src={sum} alt="" /></span>
            </div>
          </div>
          <div className='op' onClick={(e) => openModal('CAPACITAÇÃO E EMPODERAMENTO', 'Os cursos oferecem uma chance única de aprender e crescer em suas vidas profissionais. Eles abrem portas para novas habilidades. ', '#FFD700', human, e)}>
            <img src={human} alt="" className='img' />
            <div className='op-text'>
              <h2>CAPACITAÇÃO E EMPODERAMENTO</h2>
              <span className='sum-txt'><img src={sum} alt="" /></span>
            </div>
          </div>
        </div>
      </section>

      <Modal show={showModal} onClose={closeModal} buttonPosition={buttonPosition} color={modalColor} image={modalImage}>
        <h2>{modalTitle}</h2>
        <p>{modalMessage}</p>
      </Modal>
    </>
  );
};