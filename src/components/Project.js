import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { works } from '../data/works'

const Project = () => {
    const [proyecto, setProyecto] = useState({});
    const params = useParams();
    useEffect(() => {
        const work = works.filter(work => work.id === params.id);
        setProyecto(work[0]);
    }, []);
  return (
    <div className='page'>
        <h1 className='heading'>{`Proyecto ${proyecto.nombre}`}</h1>
        <section className='project'>
           <p>{proyecto.tecnologias}</p>
           <p>{proyecto.descripcion}</p>
        </section>
    </div>
  )
}

export default Project