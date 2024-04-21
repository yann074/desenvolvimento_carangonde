import React from 'react'

export const login = () => {
  return (
    <>
    <section className='container-login'>
        <div>
            <h1>Bem Vindo de Volta</h1>
            <h3>Entre Para Acessar Nosso Conteúdo</h3>
        </div>
        <div>
            <h2>Login</h2>
            <button>GOOGLE</button>
            <input type="email" placeholder='Digite seu Email' />
            <input type="password" placeholder='Digite sua senha' />
            <input type="password" placeholder='Confirme sua senha' />
            <button>Entrar</button>
            <h5>ESQUECI MINHA SENHA</h5>

            <h5>NÃO TEM CONTA?CADASTRE-SE AQUI</h5>
        </div>
    </section>
    </>
  )
}
