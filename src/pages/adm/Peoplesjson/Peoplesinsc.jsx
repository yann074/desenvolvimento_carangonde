import React, { useEffect, useState } from 'react';
import '../Peoplesjson/Peoples.css';
import axios from 'axios';

export const Peoplesinsc = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost/backend/public/Modal/testeadm.php')
      .then(response => {
        console.log(response.data.message)
        setData(response.data.data); 
      })
      .catch(error => {
        setError('Erro ao buscar os usuários');
        console.error('Houve um erro!', error);
      });
  }, []);
  return (
    <div>
      <ul>
       
  {data && data.map(item => {
    const { id, name, email, cpf } = item;
    return (
      <li key={id}>
          <div className='image'>
            <img src="" alt="Course" />
          </div>
          <div className='info'>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{cpf}</p>
          </div>
      </li>
    );
  })}

      </ul>
    </div>
  );
};