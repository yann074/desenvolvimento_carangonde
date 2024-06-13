import React from 'react'
import { useEffect, useState } from 'react'
import { Headerl } from '../../components/Headerl'
import { Footer } from '../../components/Footer'
import '../stylespage/initial.css'
import '../../pages/stylespage/initial.css'
import axios from 'axios'

import './Eventos.css'
export const Eventss = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/backend/public/events/aparecerEvents.php')
          .then(response => {
            console.log(response.data.message)
            setData(response.data.data); 
          })
          .catch(error => {
            setError('Erro ao buscar cursos');
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
                <p className='texto-principal'>Junte-se a nós e faça parte de uma <br />comunidade vibrante e dinamica, onde os <br /> eventos são apenas o começo</p>
            </div>
        </div>
        <section className='grid-container'>
            <div className='container-div'>
            {data.map(item => {
          const { id, name_e, desc_e, data_e } = item; // Adicione image_path aqui
          return (
            <div className='item' key={id} onClick={() => openModal(item)}>
             
              <div className='info'>
                <h3>{name_e}</h3>
                <p>{desc_e}</p>
                <p>{data_e}</p>
              </div>
            </div>
          );
        })}
                
            </div>
        </section>
            <footer>
                <Footer />
            </footer>
    </section>
   </>
  )
}