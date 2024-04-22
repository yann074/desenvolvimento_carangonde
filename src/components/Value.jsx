import React, { useState } from 'react';
import dollar from '../assets/dollar.svg';
import group from '../assets/group.svg';
import water from '../assets/water.svg';
import './styles/Valuel.css';

export const Value = () => {
  const [showDollar, setShowDollar] = useState(false);
  const [showGroup, setShowGroup] = useState(false);
  const [showWater, setShowWater] = useState(false);

  function appearMouse(icon) {
    if (icon === 'dollar') setShowDollar(true);
    else if (icon === 'group') setShowGroup(true);
    else if (icon === 'water') setShowWater(true);
  }

  function hideIcon(icon) {
    if (icon === 'dollar') setShowDollar(false);
    else if (icon === 'group') setShowGroup(false);
    else if (icon === 'water') setShowWater(false);
  }

  return (
    <>
      <section className='container-value'>
        <h2>NOSSOS VALORES</h2>
        <div className='container-blocks'>
          <div
            onMouseEnter={() => appearMouse('dollar')}
            onMouseLeave={() => hideIcon('dollar')}
            style={{ position: 'relative' }}
          >
            <img src={dollar} alt='' className='bg-yellow' />
            <p>Uma organização social sem fins lucrativos</p>
            {showDollar && (
              <div id='dollar' className='icon-description'>
                <h2>Visão</h2>
                <p>Almejamos um futuro onde cada pessoa, independentemente de sua origem ou condição socioeconômica, tenha acesso a moradias dignas e sustentáveis, promovendo assim a construção de comunidades mais justas, solidárias e conscientes de seu papel na sociedade.</p>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => appearMouse('group')}
            onMouseLeave={() => hideIcon('group')}
            style={{ position: 'relative' }}
          >
            <img src={group} alt='' className='bg-yellow' />
            <p>Entregamos cidadania às pessoas em situação de vulnerabilidade social</p>
            {showGroup && (
              <div id='group' className='icon-description'>
                <h2>Missão</h2>
                <p>Promover qualidade de vida e cidadania a jovens e adultos por meio da construção de moradia digna e qualificação profissional, priorizando a educação, o desenvolvimento sustentável e a preservação das culturas como forma de transformação social e fortalecimento da identidade.</p>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => appearMouse('water')}
            onMouseLeave={() => hideIcon('water')}
            style={{ position: 'relative' }}
          >
            <img src={water} alt='' className='bg-yellow' />
            <p>Facilitamos o seu acesso aos serviços públicos</p>
            {showWater && (
              <div id='water' className='icon-description'>
                <h2>Três Valores</h2>
                <ul>
                  <li>União</li>
                  <li>Comprometimento</li>
                  <li>Valorização</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
