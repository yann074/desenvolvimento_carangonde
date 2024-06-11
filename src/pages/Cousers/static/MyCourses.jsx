import React, { useEffect, useState, useRef } from 'react'; 
import "./MyCousers.css";
import esq from './esquerda.svg';
import dir from './direita.svg';
import axios from 'axios';
import Modal from '../../../components/ModalCourses';

export const MyCourses = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const carousel = useRef(null);

  useEffect(() => {
    axios.get('http://localhost/backend/public/Modal/aparecerModal.php')
      .then(response => {
        console.log(response.data.message)
        setData(response.data.data); 
      })
      .catch(error => {
        setError('Erro ao buscar cursos');
        console.error('Houve um erro!', error);
      });
  }, []);
  

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  console.log('Data:', data);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data || !data.length) {
    return <div>Loading...</div>;
  }
  return (
    <div className='container' id='cursos'>
      <div className='logo'>
        <h1>CURSOS</h1>
      </div>
      <div className='carousel' ref={carousel}>
        {data.map(item => {
          const { id, name_c, desc_c, tempo_c } = item;
          return (
            <div className='item' key={id} onClick={() => openModal(item)}>
              <div className='image'>
                <img src="" alt="Course" />
              </div>
              <div className='info'>
                <h3>{name_c}</h3>
                <p>{desc_c}</p>
                <p>{tempo_c}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='buttons'>
        <button onClick={handleLeftClick}><img src={esq} alt="Left" /></button>
        <button onClick={handleRightClick}><img src={dir} alt="Right" /></button>
      </div>
      {isModalOpen && selectedCourse && (
        <Modal course={selectedCourse} onClose={closeModal} />
      )}
      {error && <div className='error'>{error}</div>}
    </div>
  );
}
