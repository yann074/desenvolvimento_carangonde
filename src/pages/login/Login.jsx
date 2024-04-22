import { Link } from 'react-router-dom'
import './Loginl.css'


export const Login = () => {
  return (
    <>
    
    <section className='container_login'>
        <div className='container_login_apresentation'>
            <h1>Bem Vindo De Volta</h1>
            <h3>Entre Para Acessar Nosso Conteúdo</h3>
        </div>
        <div className='container_login_op'>
            <h2>Login</h2>

            <button className='google'>GOOGLE</button>
            <input type="email" placeholder='Digite seu email' />
            <input type="password" placeholder='Digite sua senha'/>
            <input type="password" placeholder='Confirmar senha' />
            {/* <button className='entrar'>ENTRAR</button> */}
            <Link to={'/cousers'}> Entrar</Link>
            <h5>Esqueci Minha Senha</h5>
            <h5>NÃO TEM CONTA? CADASTRE-SE AQUI</h5>
        </div>
    </section>
    </>
  )
}
