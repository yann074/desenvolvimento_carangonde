import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Loginl.css';

export const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    submit: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!form.email) {
      errors.email = 'O email é obrigatório.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'Email inválido.';
      valid = false;
    }

    if (!form.password) {
      errors.password = 'A senha é obrigatória.';
      valid = false;
    } else if (form.password.length < 6) {
      errors.password = 'A senha deve ter pelo menos 6 caracteres.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    axios.post('http://localhost/backend/public/login.php', form)
      .then(response => {
        console.log(response.data);
        if (response.data.message === "Email e senha corretos") {
          window.location.href = "http://localhost:5173/coursers";
        } else if (response.data.message === "Email e senha corretos adm") {
          window.location.href = "http://localhost:5173/adm";
        } else {
          setErrors({ ...errors, submit: 'Email ou senha incorretos.' });
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
            {errors.email && <p className='error'>{errors.email}</p>}
            <input
              name='password'
              type="password"
              placeholder='Digite sua senha'
              onChange={handleChange}
              required
            />
            {errors.password && <p className='error'>{errors.password}</p>}
            <button className='entrar' type="submit">ENTRAR</button>
            {errors.submit && <p className='error'>{errors.submit}</p>}
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