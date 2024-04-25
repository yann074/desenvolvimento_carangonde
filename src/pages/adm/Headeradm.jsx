import logo from "../assets/logo_carangonde.svg"
import './styles/Headerl.css'
import { Link } from 'react-router-dom'
export const Headerl = () => {
  return (
    <>
        <header>
            <div className='container-logo'>
                <img src={logo} alt="logo Carangode" />
                <h2>Instituto Carangondé Cidadania</h2>
            </div>
            <div className='container-options'>
                <ul>
                    <li>Ínicio</li>
                    <li>Quem Somos</li>
                    <li><Link to={'/eventos'}Eventos></Link></li>
                    
                    <li>Contato</li>
                </ul>
                <button>
                     <Link to={'/login'}>Entrar</Link>
                </button>
               
            </div>
        </header>
    </>
  )
}