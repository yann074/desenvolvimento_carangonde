import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios
import './Loginl.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!email || !email.includes('@')) {
      errors.email = "Por favor, digite um email válido.";
      isValid = false;
    }

    if (!password) {
      errors.password = "Por favor, digite sua senha.";
      isValid = false;
    }

    if (!isValid) {
      setErrorMessages(errors);
    } else {
      alert("Formulário válido. Enviando dados...");
    }

    return isValid;
  };

  return (
    <>
    <div data-aos="fade-right">
      <section className='container_login'>
        <div className='container_login_apresentation'>
          <h1>Bem Vindo De Volta</h1>
          <h3>Entre Para Acessar Nosso Conteúdo</h3>
        </div>
        <div className='container_login_op'>
          <h2>Login</h2>
          <button className='google'>GOOGLE</button>
          <input
            type="email"
            placeholder='Digite seu email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMessages.email && <p className="error-message">{errorMessages.email}</p>}
          <input
            type="password"
            placeholder='Digite sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessages.password && <p className="error-message">{errorMessages.password}</p>}
      
            <button className='entrar' onClick={validateForm}>ENTRAR</button>
          
          
          <button className='esq_pass'>
            <Link to={'/register'}>Esqueci Minha Senha</Link>
          </button>
          <Link to={'/register'}>
            <h5>NÃO TEM CONTA? CADASTRE-SE AQUI</h5>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};
