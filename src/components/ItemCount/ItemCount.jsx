import React from 'react'
import { useState } from 'react'

export default function ItemCount({stock, initial, onAdd}) {
  
  const [counter, setCounter] = useState(initial)

  return (
    <>
    <button className='bComprar' onClick={()=>{setCounter(counter - 1)}} disabled={counter === initial}>-</button>
    <span>{counter}</span>
    <button className='bComprar' onClick={()=>{setCounter(counter + 1)}} disabled={counter === stock}>+</button>
    <div><button className='bComprar' onClick={()=>onAdd(counter)} disabled={counter === 0}>Agregar al carrito</button></div>
    </>
  )
}
