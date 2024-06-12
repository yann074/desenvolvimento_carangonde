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
import ModalEvents from '../../components/ModalAddEvents';

export const Admin = () => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEventsOpen, setIsModalEventsOpen] = useState(false);

  const handleOpenModalAdd = () => {
    console.log('Opening Add Course modal');
    setIsModalAddOpen(true);
  };

  const handleOpenModalEvents = () => {
    console.log('Opening Add Event modal');
    setIsModalEventsOpen(true);
  };

  const handleCloseModalAdd = () => {
    console.log('Closing Add Course modal');
    setIsModalAddOpen(false);
  };

  const handleCloseModalEvents = () => {
    console.log('Closing Add Event modal');
    setIsModalEventsOpen(false);
  };

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    const courseName = event.target.courseName.value;
    console.log("Curso adicionado:", courseName);
    handleCloseModalAdd();
  };

  const handleSubmitEvents = (event) => {
    event.preventDefault();
    const eventName = event.target.eventName.value;
    console.log("Evento adicionado:", eventName);
    handleCloseModalEvents();
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
          <button className='button-home' onClick={handleOpenModalAdd}>Adicionar Curso</button>
          <button className='button-home' onClick={handleOpenModalEvents}>Adicionar Evento</button>
        </div>
      </header>

      <div>
        <Peoples />
      </div>

      <footer className='footer-admin'>
        <Footer />
      </footer>

      <ModalAdd isOpen={isModalAddOpen} onClose={handleCloseModalAdd} onSubmit={handleSubmitAdd} />
      <ModalEvents isOpen={isModalEventsOpen} onClose={handleCloseModalEvents} onSubmit={handleSubmitEvents} />
    </>
  );
};
