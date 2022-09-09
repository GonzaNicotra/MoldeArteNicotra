import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const {items, removeItem, clear} = useContext(CartContext)
  return (<>
    <div>Cart</div>
    {!items.length ? <>
    <div>
    Carrito vacio
    </div>
    <div>
     <Link to={'/'}><button className='bComprar'> Volver al Inicio</button></Link>
    </div>
    </> :
  <>
     <ul>
      {items.map(((item, indx) => 
          <li key={indx}>{item.nombre} - {item.quantity} <button className='bComprar' onClick={() => removeItem(item.id)} >
            Remover</button>
          </li>))}
    </ul>
    <div>precio total = ${items.reduce((pv, cv) => pv + (cv.precio * cv.quantity) ,0)}</div>
    <div><Link to={'/'}><button className='bComprar'>Agregar más productos</button></Link></div>
    <div><button className='bComprar' onClick={clear}>Vaciar Carrito</button></div>
    </>
    }
  </>
  )
}
