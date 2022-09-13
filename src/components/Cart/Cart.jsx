import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'
import CartItems from '../CartItems/CartItems';
import CartForm from '../CartForm/CartForm';

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
        <Link to={'/'}><button className='bComprar'> Volver al Inicio</button></Link>
      </div>
    </> :
    <>
      <div>
      <h2 className='fw-bold'>Carrito</h2>
        <div>
        {items.map(((item, indx) => <CartItems key={indx} img={item.img} nombre={item.nombre} precio={item.precio} quantity={item.quantity} id={item.id}  />))}
        </div>
        <div>
        <CartForm/>
      </div>
        <div>precio total = ${items.reduce((pv, cv) => pv + (cv.precio * cv.quantity) ,0)}</div>
        <div><Link to={'/productos'}><button className='bComprar'>Agregar más productos</button></Link></div>
        <div><button className='bComprar' onClick={clear}>Vaciar Carrito</button></div>
      </div>
    </>
    }
  </>
</div>
  )
}
