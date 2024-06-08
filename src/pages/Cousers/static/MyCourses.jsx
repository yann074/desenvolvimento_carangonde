import React, { useEffect, useState, useRef } from 'react'; 
import "./MyCousers.css"
import esq from './esquerda.svg'
import dir from './direita.svg'
import Modal from '../../../components/ModalCourses';

export const MyCourses = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:5173/src/pages/Cousers/static/shoes.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleLeftClick = (e) =>{
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) =>{
        console.log(carousel.current.offsetWidth);
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    const openModal = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    }

    if (!data || !data.length) return null;

    return (
        <div className='container' id='cursos'>
            <div className='logo'>
                <h1>CURSOS</h1>
            </div>
            <div className='carousel' ref={carousel}>
                {data.map(item => {
                    const { id, name, desc, tempo, image } = item;
                    return (
                        <div className='item' key={id} onClick={() => openModal(item)}>
                            <div className='image'>
                                <img src={image} alt={name} />
                            </div>
                            <div className='info'>
                                <span className='name'>{name}</span>
                                <span className='dec'>{desc}</span>
                                <span className='tempo'>{tempo}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='buttons'>
                <button onClick={handleLeftClick}><img src={esq} alt="" /></button>
                <button onClick={handleRightClick}><img src={dir} alt="" /></button>
            </div>
            {isModalOpen && (
                <Modal course={selectedCourse} closeModal={closeModal} />
            )}
        </div>
    );
};

export default MyCourses;