import React from 'react'
import { works } from '../data/works'
import { Link } from 'react-router-dom'

const WorkList = ({ limit = 100 }) => {
  return (
    works.slice(0, parseInt(limit)).map(work => {
    return (
        <article key={work.id}>
        <span>{work.categorias}</span>
        <h2><Link to={`/proyecto/${work.id}`}>{work.nombre}</Link></h2>
        <h3>{work.tecnologias}</h3>
        </article>
    )
    })
  )
}

export default WorkList