import React from 'react'
import { Routes, Route, BrowserRouter, NavLink, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import Briefcase from '../components/Briefcase'
import Services from '../components/Services'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Project from '../components/Project'

const MainRouter = () => {
  return (
    <BrowserRouter>
        <Header />
        <section className='content'>
            <Routes>
                <Route path="/" element={<Navigate to="/inicio" />} />
                <Route path="/inicio" element={<Home />} />
                <Route path="/portafolio" element={<Briefcase />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/curriculum" element={<Resume />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/proyecto/:id" element={<Project />} />
                <Route path="*" element={<div className='page'><h1 className='heading'>Error 404</h1></div>} />
            </Routes>
        </section>
        <Footer />
    </BrowserRouter>
  )
}

export default MainRouter