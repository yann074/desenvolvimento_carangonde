import React, { useState } from 'react';
import dollar from '../assets/dollar.svg';
import group from '../assets/group.svg';
import water from '../assets/water.svg';
import './styles/Valuel.css';

const Tooltip = ({ id, content, isVisible }) => {
  return (
    <div id={id} className={`tooltip ${isVisible ? 'fade-in' : 'fade-out'}`}>
      {content}
    </div>
  );
};

export const Value = () => {
  const [visibleTooltip, setVisibleTooltip] = useState('');

  const handleMouseEnter = (icon) => {
    setVisibleTooltip(icon);
  };

  const handleMouseLeave = () => {
    setVisibleTooltip('');
  };

  return (
    <>
      <section className='container-value'>
        <h2 className='value'>NOSSOS VALORES</h2>
        <div className='container-blocks'>
          <div
            onMouseEnter={() => handleMouseEnter('dollar')}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative' }}
          >
            <img src={dollar} alt='Dollar icon' className='bg-yellow' />
            <p>Uma organização social sem fins lucrativos</p>
            <Tooltip
              id='dollar-tooltip'
              content={
                <>
                  <h2>Visão</h2>
                  <p>Almejamos um futuro onde cada pessoa, independentemente de sua origem ou condição socioeconômica, tenha acesso a moradias dignas e sustentáveis, promovendo assim a construção de comunidades mais justas, solidárias e conscientes de seu papel na sociedade.</p>
                </>
              }
              isVisible={visibleTooltip === 'dollar'}
            />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter('group')}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative' }}
          >
            <img src={group} alt='Group icon' className='bg-yellow' />
            <p>Entregamos cidadania às pessoas em situação de vulnerabilidade social</p>
            <Tooltip
              id='group-tooltip'
              content={
                <>
                  <h2>Missão</h2>
                  <p>Promover qualidade de vida e cidadania a jovens e adultos por meio da construção de moradia digna e qualificação profissional, priorizando a educação, o desenvolvimento sustentável e a preservação das culturas como forma de transformação social e fortalecimento da identidade.</p>
                </>
              }
              isVisible={visibleTooltip === 'group'}
            />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter('water')}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative' }}
          >
            <img src={water} alt='Water icon' className='bg-yellow' />
            <p>Facilitamos o seu acesso aos serviços públicos</p>
            <Tooltip
              id='water-tooltip'
              content={
                <>
                  <h2>Três Valores</h2>
                  <ul>
                    <li>União</li>
                    <li>Comprometimento</li>
                    <li>Valorização</li>
                  </ul>
                </>
              }
              isVisible={visibleTooltip === 'water'}
            />
          </div>
        </div>
      </section>
    </>
  );
};
