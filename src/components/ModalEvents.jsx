import React, { useEffect, useState } from 'react';
import './styles/ModalCourses.css';
import download from '../pages/Cousers/static/download.svg';
import axios from 'axios';

const Modal = ({ course, closeModal }) => {
    const [courseData, setCourseData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost/backend/public/Modal/aparecerModal.php')
            .then(response => {
                console.log(response.data.message);
                const filteredCourse = response.data.data.find(item => item.id === course.id);
                setCourseData(filteredCourse);
            })
            .catch(error => {
                setError('Erro ao buscar cursos');
                console.error('Houve um erro!', error);
            });
    }, [course]);

    if (!courseData) return null;

    return (
        <div className='modal'>
            <div className='modal-content2'>
                <span className='close2' onClick={closeModal}>&times;</span>
                <div className='modal-image2'>
                    <img src={courseData.image} alt={courseData.name} />
                </div>
                <div className='modal-info2'>
                    <h2>Nome: {courseData.name_c}</h2>
                    <p>Descrição:{courseData.desc_c}</p>
                    <p><strong>Duração:</strong> {courseData.temp_c}</p>
                    <button
                        className='download-button'
                        onClick={() => downloadCourse(courseData)}
                    >
                        Download <img src={download} alt="Download Icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
