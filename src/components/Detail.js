import React from 'react';
import { Link } from 'react-router-dom';
import './detail.css'

export const Detail = ()=>{
  return(
    <section>
      <h2>Detail</h2>
      <Link className='detail__link' to='/home'>volver</Link>
    </section>
    //   <div id="miModal" className="modal">
    //   <div className="modal-contenido">
    //     <a href="#">X</a>
    //     <h2>Mi primer Modal</h2>
    //     <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
    //     <div>
    //     <Link to='/home'>volver</Link>
    //     </div>
    //   </div>  
    // </div>
  )
}