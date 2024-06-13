import React, { useEffect, useState } from 'react';
import { Headerl } from '../../components/Headerl';
import { Footer } from '../../components/Footer';
import '../stylespage/initial.css';
import '../../pages/stylespage/initial.css';
import axios from 'axios';
import './Eventos.css';

export const Eventss = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost/backend/public/events/aparecerEvents.php')
      .then(response => {
        if (response.data && response.data.data) {
          console.log(response.data.message);
          setData(response.data.data);
        } else {
          setError('Dados de resposta inesperados');
        }
      })
      .catch(error => {
        setError('Erro ao buscar eventos');
        console.error('Houve um erro!', error);
      });
  }, []);

  return (
    <>
      <section className='container-events-section'>
        <div className='bg-gray'>
          <Headerl />
          <div className='container-texts'>
            <h1 className='h1-principal'>EVENTOS</h1>
            <p className='texto-principal'>Junte-se a nós e faça parte de uma <br />comunidade vibrante e dinâmica, onde os <br /> eventos são apenas o começo</p>
          </div>
        </div>
        <section className='grid-container'>
          <div className='container-div'>
            {error && <p className="error-message">{error}</p>}
            {data.length > 0 ? (
              data.map(item => {
                const { id, name_e, desc_e, date_e } = item;
                return (
                  <div className='item' key={id}>
                    <div className='vazio-branco'>
                      <img src="" alt="Event" />
                    </div>
                    <div className='texto-eventos'>
                      <h3>{name_e}</h3>
                      <p>{desc_e}</p>
                      <p>{date_e}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              !error && <p>Carregando eventos...</p>
            )}
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
};
