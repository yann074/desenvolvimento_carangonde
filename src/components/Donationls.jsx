import React from 'react'
import pix from '../assets/image.png'
import './styles/Donation.css'

export const Donation = () => {
  return (
    <>  <div data-aos="fade-right">
        <section className='container-pix'>
            <h4>FAÇA A DIFERENÇA COM SUA DOAÇÃO</h4>

            <div className='container-img-nmr'>
                <img src={pix} alt="" />
                <h6>Telefone: (xx) xxxx-xxxx</h6>
            </div>
        </section>
        </div>
    </>
  )
}
