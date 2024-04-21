import React from 'react'
import './Registerl.css'

export const Register = () => {
  return (
    <>
    <section className='container_register'>
        <div className='container_register_apresentation'>
            <h1>Crie Sua Conta</h1>
            <h3>Junte-se à nossa comunidade e Tenha Acesso aos nossos cursos.</h3>
        </div>
        <div className='container_register_op'>
            <h2>CADASTRE-SE</h2>
            <button className='google'>GOOGLE</button>
            <input type="text" placeholder='Digite seu nome completo'/>
            <input type="email" placeholder='Digite seu email' />
            <input type="password" placeholder='Digite sua senha'/>
            <input type="password" placeholder='Confirme sua senha' />
            <input type="text" placeholder='Digite seu CPF' />
            <label htmlFor="">Data de Nascimento</label>
            <input type="date" />
            <button className='entrar'>CADASTRAR</button>
        </div>
    </section>
    </>
  )
}
