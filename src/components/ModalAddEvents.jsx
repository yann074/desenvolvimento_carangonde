import React, { useState } from 'react';
import './styles/ModalAdd.css';
import axios from 'axios';

const ModalAddEvents = ({ isOpen, onClose }) => {
  console.log('ModalAdd rendered, isOpen:', isOpen);

  const [form, setForm] = useState({
    name_e: '',
    desc_e: '',
    date_e: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost/backend/public/events/acaoEvents.php', form)
      .then(response => {
        console.log(response.data);       
        if (response.data.message === "Evento Criado") {
        }  
      })
      .catch(error => {
        console.error('Não foi possível salvar:', error);
      });
  };
  
  if (!isOpen) return null;

  return (
    <div className="modal-overlay3">
      <div className="modal-content3">
        <h2>Adicionar Evento</h2>
        <form className='form' onSubmit={handleSubmit}>
        <label>
            Adicione um foto:
            <input type="file"/>
          </label>
          <label>
            Nome do Evento:
            <input type="text" name="name_e" onChange={handleChange} required />
          </label>
          <label>
            Descrição do Evento:
            <input type="text" name='desc_e' onChange={handleChange} required />
          </label>
          <label>
            Data do Evento:
            <input type="date" name='date_e' onChange={handleChange} required />
          </label>
          <div className="modal-buttons3">
            <button type="submit">Adicionar</button>
            <button type="button" onClick={onClose}>Fechar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddEvents;
