import React from 'react';
import { Link } from 'react-router-dom';
import './about.css'

const profilePicture = require('../assets/fotoperfil.jpeg') 

export const About = ()=>{
  return (
    <section className='about'>
      <div className='about__image'>
        <img src={profilePicture}/>
      </div>
      <div>
        <h2 className='about__name'>OLGA LUCIA MARIN SANCHEZ</h2>
        <p className='about__description'>Profesional en Contaduría Pública enfocada actualmente en el Desarrollo de Software.
          Experiencia de 17 años en el sector financiero y con gran interés en nuevas oportunidades
          que me permitan crecer personal y profesionalmente en la industria de la tecnología.</p>
        <p className='about__list'>En este programa he aprendido: 
        <ul >
          <li>Desarrollo de sofware</li>
          <li>Manejo de tecnologias</li>
          <li>Git - Github</li>
        </ul>
        </p>
        <p className='about__email'>Correo electronico: <spam>oluciams84@gmail.com</spam></p>
        <Link to='' className='about__link'>github</Link>
      </div>
    </section>  
  )
}