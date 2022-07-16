import React from 'react'
import './cont_css.css';
import logo from '../../assets/Lupa.png';


const Contador = () => {
  return (
    <>
    <header>
    <div className="container_header">
        <div className="logo">
        HAXORUS
        </div>

        <div className="menu">
            <nav>
                <ul>
                    <li><a href="/pricingc">Ruta</a></li>
                    <li><a href="#">Montaña</a></li>
                    <li><a href="#">Urbana</a></li>
                    <li><a href="/todo">Reparaciones</a></li>
                    <li><a href="#">Chat</a></li>
                    <li><input type='text' placeholder='Buscar' className='buscar '/></li>
                </ul>
            </nav>
        </div>
        <div className="header_register">
            <input type="button" className="btn_header_login" value="Iniciar sesión"/>
            <button className="btn_header_register">Compra <i class="fas fa-shopping-cart"></i></button>
        </div> 
    </div>
    

</header>
</>
  )
}

export default Contador