import React from 'react'
import { Link } from 'react-router-dom'
import WorkList from './WorkList'

const Home = () => {
  return (
    <div className='home'>
        <h1>Hola soy Marcos Bustos y soy <strong>desarrollador Web</strong> en La Serena y ofrezco mis servicios de <strong>programación y desarrollo</strong> en todo tipo de proyectos web.</h1>
        <h2>Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y relevancia en internet. <Link to="/contacto">Contacta conmigo</Link></h2>
        <section className='last-works'>
            <h2 className='heading'>Algunos de mis proyectos</h2>
            <p>Estos son algunos de mis trabajos de desarrollo Web</p>
            <div className='works'>
              <WorkList limit="1" />
            </div>
        </section>
    </div>
  )
}

export default Home