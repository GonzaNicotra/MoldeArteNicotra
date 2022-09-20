import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './ItemCount.css';

export default function ItemCount({stock, initial, onAdd}) {
  
  const [counter, setCounter] = useState(initial)

  return (
    <>
    <Button variant='light' className='bComprar' onClick={()=>{setCounter(counter - 1)}} disabled={counter === initial}>-</Button>
    <span className='tam'>{counter}</span>
    <Button variant='light' className='bComprar' onClick={()=>{setCounter(counter + 1)}} disabled={counter === stock}>+</Button>
    <div><Button variant='light' className='bComprar' onClick={()=>onAdd(counter)} disabled={counter === 0}>Agregar al carrito</Button></div>
    </>
  )
}
