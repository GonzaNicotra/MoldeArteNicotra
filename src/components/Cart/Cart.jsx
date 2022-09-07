import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

export default function Cart() {
  const {items} = useContext(CartContext)
  return (<>
    <div>Cart</div>
    {items.length && <ol>
      {items.map(((item, indx) => <li key={indx}>{item.nombre} - {item.quantity}</li>))}
    </ol>}
  </>
  )
}
