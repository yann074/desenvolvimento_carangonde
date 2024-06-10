import logo from "../assets/logo_carangonde.svg"
import './styles/Headerl.css'
import { Link } from 'react-router-dom'
export const Headerl = () => {
  return (
    <>
        <header id="header">
            <div className='container-logo'>
                <img src={logo} alt="logo Carangode" />
                <h2>Instituto Carangondé Cidadania</h2>
            </div>
            <div className='container-options'>
                <ul>
                    <li><Link to={"/"}>Ínicio</Link></li>
                    <li><a href="#nos">Quem Somos</a></li>
                    <li><Link to={'/eventos'}Eventos>Eventos</Link></li>
                    
                    <li><a href="#footer">Contato</a></li>
                </ul>
                <button>
                     <Link to={'/entrar'}>Entrar</Link>
                </button>
               
            </div>
        </header>
    </>
  )
}
