import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

export default function Cart() {
  const {items, addItem, removeItem, clear} = useContext(CartContext)
  return (<>
    <div>Cart</div>
    {!items.length ? <span>Carrito vacio</span> :
  <>
     <ol>
      {items.map(((item, indx) => <li key={indx}>{item.nombre} - {item.quantity} <button className='bComprar' onClick={() => removeItem(item.id)} >Remover</button></li>))}
    </ol>
    <div>precio total = ${items.reduce((pv, cv) => pv + (cv.precio * cv.quantity) ,0)}</div>
    <div><button className='bComprar' onClick={clear}>Vaciar Carrito</button></div>
    </>
    }
  </>
  )
}
