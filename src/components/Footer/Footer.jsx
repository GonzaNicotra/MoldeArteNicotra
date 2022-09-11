import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div style={{backgroundColor: "#d368c5d3"}} className='d-flex justify-content-center flex-column text-white p-3'>
        <div className='p-1'>Sigamos conectados!</div>
        <div className='p-1'>
            <a href="https://www.instagram.com/moldearteceramica/" target='_blank' className='anchor'>
            <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com/MoldeArteCeramica/" target='_blank' className='anchor'>
            <i class="bi bi-facebook"></i>
            </a>
        </div>
        <div className='p-1'>© Copyright: MoldeArte - 2022. Todos los derechos reservados.</div>
    </div>
  )
}
