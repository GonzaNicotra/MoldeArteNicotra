import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './CartItems.css'

export default function CartItems({ nombre, precio, quantity, id, img }) {

    const {removeItem} = useContext(CartContext)

  return (
    <div className='border-bottom'>
        <div className='d-flex flex-row justify-content-around align-items-center p-2'>
            <img className='flex-column imgItem' src={img} alt={nombre} />
            <h3 className='flex-column'>{nombre}</h3>
            <p className='flex-column fw-bold'>Precio: ${precio}</p>
            <div className='flex-column'>
                <div className='d-flex'>
                <p className='flex-column cartP fw-bold'>Cantidad:  {quantity}</p>
                <button className='bComprar' onClick={() => removeItem(id)} >
                Remover</button>
                </div>
            </div>
        </div>
    </div>
  )
}
