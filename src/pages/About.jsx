import React from 'react';
import '../assets/styles/about.css'

const profilePicture = require('../assets/images/fotoperfil.jpeg') 

export const About = ()=>{
  return (
    <section className='about'>
      <div className='about__header'>
        <img src={profilePicture} className='about__image'/>
      </div>
      <div className='about__body'>
        <h3 className='about__name'>OLGA LUCIA MARIN SANCHEZ</h3>
        <p className='about__description'>Profesional en Contadur&iacute;a P&uacute;blica enfocada actualmente en el Desarrollo de Software.
          Experiencia de 17 años en el sector financiero y con gran inter&eacute;s en nuevas oportunidades
          que me permitan crecer personal y profesionalmente en la industria de la tecnolog&iacute;a.</p>
        <p>En este programa he aprendido: </p>
        <ul className='about__list'>
          <li>Desarrollo de sofware, Stack MERN.</li>
          <li>Metodologia SCRUM</li>
          <li>Git - Github</li> 
        </ul>     
        <p className='about__email'>Correo electronico: oluciams84@gmail.com</p>
        <a target='_blank' rel='noreferrer' href='https://github.com/oluciams' className='about__link'>Mi Github</a>      
      </div>
    </section>  
  )
}