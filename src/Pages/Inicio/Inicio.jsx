import React from 'react';
import Carrusel from '../../components/Carousel/Carousel';
import './Inicio.css';
import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div className='inicio'>
      <Carrusel/>
      <h1 className="textoInicio">
      En MoldeArte realizamos productos de cerámica utilitarios y de decoración, elaborados de
      manera artesanal.
    </h1>
    <h2 className="textoInicio">Elegí los que más te gustan acá
      <Link to={'/productos'}><button className='bInicio'>Tienda</button></Link>
    </h2>
    </div>
  )
}
