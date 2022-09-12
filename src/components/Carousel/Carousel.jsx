import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel"
          src="https://galeriamarte.netlify.app/Assets/carrusel.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='visually-hidden'>Bienvenidos a MoldeArte</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel"
          src="https://galeriamarte.netlify.app/Assets/carruselDos.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://galeriamarte.netlify.app/Assets/carruselTres.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;