// Admin.jsx
import React, { useState } from 'react';
import logo from "../../assets/logo_carangonde.svg";
import human from "../../assets/human.svg";
import calen from "../../assets/calen.svg";
import { Link } from 'react-router-dom';
import profile from "../../assets/profile.svg";
import { Peoples } from './Peoples';
import { Footer } from '../../components/Footer';
import './Admin_nav.css';
import ModalAdd from '../../components/ModalAdd';

export const Admin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const courseName = event.target.courseName.value;
    console.log("Curso adicionado:", courseName);
    handleCloseModal();
  };

  return (
    <>
      <header className='container-header-main'>
        <div>
          <nav className='container-headeradm'>
            <div className='container-header-logo'>
              <img src={logo} alt="Logo" />
              <h2>Instituto Carangondé Cidadania</h2>
            </div>
            <ul>
              <li> <img src={human} alt="Human Icon" /> <a href="#" className='componets_adm'>Inscritos</a></li>
              <li><img src={calen} alt="Calendar Icon" /> <a href="#" className='componets_adm'>Calendário</a></li>
              <li><img src={profile} alt="Profile Icon" /> <a href="#" className='componets_adm'>Perfil do Adm</a></li>
            </ul>
          </nav>
        </div>
        <div className='buttons'>
          <Link to={"/"} className='button-home'><p>Página Inicial</p></Link>
          <button className='button-home' onClick={handleOpenModal}>Adicionar Curso</button>
        </div>
      </header>

      <div>
        <Peoples />
      </div>

      <footer className='footer-admin'>
        <Footer />
      </footer>

      <ModalAdd isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
    </>
  );
};
