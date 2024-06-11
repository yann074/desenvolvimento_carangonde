import React, { useState } from 'react';
import './styles/ModalAdd.css';
import axios from 'axios';

const ModalAdd = ({ isOpen, onClose }) => {
  console.log('ModalAdd rendered, isOpen:', isOpen);

  const [form, setForm] = useState({
    name_c: '',
    desc_c: '',
    temp_c: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost/backend/public/modal/acaoModal.php', form)
      .then(response => {
        console.log(response.data);       
        if (response.data.message === "Curso Criado") {
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
        <h2>Adicionar Curso</h2>
        <form className='form' onSubmit={handleSubmit}>
        <label>
            Adicione um foto:
            <input type="file"/>
          </label>
          <label>
            Nome do Curso:
            <input type="text" name="name_c" onChange={handleChange} required />
          </label>
          <label>
            Descrição:
            <input type="text" name='desc_c' onChange={handleChange} required />
          </label>
          <label>
            Tempo do Curso:
            <input type="time" name='temp_c' onChange={handleChange} required />
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

export default ModalAdd;
