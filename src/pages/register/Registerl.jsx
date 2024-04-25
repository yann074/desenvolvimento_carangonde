import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registerl.css';

export const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!fullName || !email || !password || !confirmPassword || !cpf || !birthdate) {
      setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Por favor, insira um endereço de email válido.");
      return false;
    }

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      return false;
    }

    if (cpf.length !== 11) {
      setErrorMessage("Por favor, insira um CPF válido (apenas 11 dígitos).");
      return false;
    }

    const currentDate = new Date();
    const selectedDate = new Date(birthdate);
    if (selectedDate >= currentDate) {
      setErrorMessage("Por favor, insira uma data de nascimento válida.");
      return false;
    }

    
    setErrorMessage('');
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Formulário válido. Redirecionando para a tela inicial...");
    }
  };

  return (
    <>
      <section className='container_register'>
        <div className='container_register_apresentation'>
          <h1>Crie Sua Conta</h1>
          <h3>Junte-se à nossa comunidade e Tenha Acesso aos nossos cursos.</h3>
        </div>
        <div className='container_register_op'>
          <h2>CADASTRE-SE</h2>
          <button className='google'>GOOGLE</button>
          <input
            type="text"
            placeholder='Digite seu nome completo'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder='Digite seu email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder='Digite sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder='Confirme sua senha'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder='Digite seu CPF'
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <label htmlFor="">Data de Nascimento</label>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
          {}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <Link to="/">
            <button className='entrar' onClick={handleSubmit}>CADASTRAR</button>
          </Link>
        </div>
      </section>
    </>
  );
};
