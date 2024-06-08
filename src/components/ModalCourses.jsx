import React from 'react';
import './styles/ModalCourses.css';
import download from '../pages/Cousers/static/download.svg'

const Modal = ({ course, closeModal }) => {
    if (!course) return null;

    return (
        <div className='modal'>
            <div className='modal-content2'>
                <span className='close2' onClick={closeModal}>&times;</span>
                <div className='modal-image2'>
                    <img src={course.image} alt={course.name} />
                </div>
                <div className='modal-info2'>
                    <h2>{course.name}</h2>
                    <p>{course.desc}</p>
                    <p><strong>Duração:</strong> {course.tempo}</p>
                    <button
                        className='download-button'
                        onClick={() => downloadCourse(course)}
                    >
                     Download <img src={download}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;