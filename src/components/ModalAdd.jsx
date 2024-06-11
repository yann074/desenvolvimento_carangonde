import React, {useState} from 'react';
import './styles/ModalAdd.css'
const ModalAdd = ({ isOpen, onClose, onSubmit }) => {
  console.log('ModalAdd rendered, isOpen:', isOpen);
  
  if (!isOpen) return null;

  return (
    <div className="modal-overlay3">
      <div className="modal-content3">
        <h2>Adicionar Curso</h2>
        <form className='form' onSubmit={onSubmit}>
          <label>
            Nome do Curso:
            <input type="text" name="courseName" required />
          </label>
          <label>
            Descrição:
            <input type="text" name='courseDescription' required/>
          </label>
          <label>
            Tempo do Curso:
            <input type="time" name='courseDescription' required/>
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