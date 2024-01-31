import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>M</span>
            <h3>Marcos Bustos WEB</h3>
        </div>
        <nav>
            <ul>
                <li><NavLink to="/inicio" className={({isActive}) => isActive ? 'active' : null}>Inicio</NavLink></li>
                <li><NavLink to="/portafolio" className={({isActive}) => isActive ? 'active' : null}>Portafolio</NavLink></li>
                <li><NavLink to="/servicios" className={({isActive}) => isActive ? 'active' : null}>Servicios</NavLink></li>
                <li><NavLink to="/curriculum" className={({isActive}) => isActive ? 'active' : null}>Curriculum</NavLink></li>
                <li><NavLink to="/contacto" className={({isActive}) => isActive ? 'active' : null}>Contacto</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header