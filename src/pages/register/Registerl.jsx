import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Registerl.css';

export const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    birthday: '',
    cpf: ''
  });

 

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    axios.post('http://localhost/backend/public/register.php', form)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div data-aos="fade-right">
    <form onSubmit={handleSubmit} className='container_register'>
      <div className='container_register_apresentation'>
        <h1>Crie Sua Conta</h1>
        <h3>Junte-se à nossa comunidade e Tenha Acesso aos nossos cursos.</h3>
      </div>
      <div className='container_register_op'>
        <h2>CADASTRE-SE</h2>
        <button className='google'>GOOGLE</button>
 
        <input
            type="text"
            name='name'
            placeholder='Digite seu nome completo'
            onChange={handleChange}
            required
          />
          <input
            name='email'
            type="email"
            placeholder='Digite seu email'
            onChange={handleChange}
            required
          />
          <input
          name='password'
            type="password"
            placeholder='Digite sua senha'
            onChange={handleChange}
            required
          />
          <label htmlFor="">Data de Nascimento</label>
          <input
          name='birthday'
            type="date"
            onChange={handleChange}
            required
          />
          <input
          name='cpf'
            type="text"
            placeholder='Digite seu CPF'
            onChange={handleChange}
            required
          />
          
          <button  type="submit">Register</button>


              
          
    </div>
    </form>
      </div>
  );
};

