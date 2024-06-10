import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Loginl.css';

export const Login = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost/backend/public/login.php', form)
      .then(response => {
        console.log(response.data);
        if(response.data.message == "Email e senha corretos"){
          window.location.href = "http://localhost:5173/coursers";
        }  
        if(response.data.message == "Email e senha corretos adm"){
          window.location.href = "http://localhost:5173/adm";
        }  
          else {
          window.alert("email ou senha errada");
          console.error('Email ou senha incorretos');
        }
      })
      
      .catch(error => {
        console.error('Houve um erro!', error);
      });
  };
 
  return (
    <>
    <div data-aos="fade-right">
      <form className='container_login' onSubmit={handleSubmit}>
        <div className='container_login_apresentation'>
          <h1>Bem Vindo De Volta</h1>
          <h3>Entre Para Acessar Nosso Conteúdo</h3>
        </div>
        <div className='container_login_op'>
          <h2>Login</h2>
          <button className='google'>GOOGLE</button>
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
            <button className='entrar' type="submit">ENTRAR</button>
          
          
          <button className='esq_pass'>
            <Link to={'/forgot-password'}>Esqueci Minha Senha</Link>
          </button>
          <Link to={'/register'}>
            <h5>NÃO TEM CONTA? CADASTRE-SE AQUI</h5>
          </Link>
        </div>
      </form>
      </div>
    </>
  );
};
