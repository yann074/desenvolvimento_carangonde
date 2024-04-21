import React from 'react'
import './styles/Evidence.css'

export const Evidence = () => {
  return (
    <>
    <section className='container-evidence'>
        <h2>Depoimentos</h2>
        <p>Descubra as histórias inspiradoras de transformação: 
            nossos depoimentos são testemunhos reais de esperança, 
            coragem e superação. Venha se inspirar conosco</p>
            <div>
                <div className='evidence_1'>
                    <div className='evidence_text1'>
                        <p>“Hoje fui receber minha cesta basica, doada pela 
                            carangondé cidadania, eu adorei essa ação pois 
                            veio na hora certa, recebi uma cesta básica e agradeço, 
                            continue sendo assim sempre.”</p>
                            <p>Contemplada com uma cesta básica</p>
                    </div>
                    <div className='evidence_text2'>
                        <p>“Eu agradeço a vocês e a Deus por ter esse privilégio 
                            de ter vocês aqui, e agradeço pela casa, foi Deus que 
                            colocou vocês aqui pra a gente, pra cada um de nós.”</p>
                            <p>Contemplada com uma casa</p>
                    </div>
                </div>
                <div className='evidence_2'>
                    <div className='evidence_text3'>
                        <p>“Se não fosse vocês, a gente não teria esse casa, e eu peço que continue,
                            em nome de Jesus, continue essa casa, pois minha família ainda precisa
                            desse apoio” </p>
                            <p>Contemplada com uma casa</p>
                    </div>
                    <div className='evidence_text4'>
                        <p>“Eu agradeço a vocês e a Deus por ter esse privilégio de ter vocês aqui,
                            e agradeço pela casa, foi Deus que colocou vocês aqui pra a gente, pra
                            cada um de nós.”</p>
                            <p>Contemplada com uma casa</p>
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}
