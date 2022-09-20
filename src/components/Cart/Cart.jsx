import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'
import CartItems from '../CartItems/CartItems';
import CartForm from '../CartForm/CartForm';
import { Button } from 'react-bootstrap';

export default function Cart() {
  const {items, clear} = useContext(CartContext)
  return (
  <div className='cart'>
    <>

      {!items.length ? 
      <>
        <div>
          Carrito vacio
        </div>
      <div>
        <Link to={'/'}><Button variant='light' className='bComprar'> Volver al Inicio</Button></Link>
      </div>
    </> :
    <>
      <div>
      <h2 className='fw-bold'>Carrito</h2>
        <div>
        {items.map(((item, indx) => <CartItems key={indx} img={item.img} nombre={item.nombre} precio={item.precio} quantity={item.quantity} id={item.id}  />))}
        </div>
        <div className='row contBtn'>
          <div className='col'>
            <div><Link to={'/productos'}><Button variant='light' className='bComprar'>Agregar más productos</Button></Link></div>
            <div><Button variant='light' className='bComprar' onClick={clear}>Vaciar Carrito</Button></div>
          </div>
        <h3 className='fw-bold col'>Precio total = ${items.reduce((pv, cv) => pv + (cv.precio * cv.quantity) ,0)}</h3>
        </div>
        <div className='d-flex justify-content-center'>
        <CartForm/>
        </div>
      </div>
    </>
    }
  </>
</div>
  )
}
