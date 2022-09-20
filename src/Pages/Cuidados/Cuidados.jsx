import React from 'react';
import './Cuidados.css';

export default function Cuidados() {
  return (
    <div className='cuidados'>
        <h1>Cuidados</h1>
        <h2>Te dejamos algunos tips para el cuidado de tus piezas de cerámica:</h2>
        <ul>
            <li>No dejes las piezas en remojo por mucho tiempo, esto puede provocar un deterioro más rápido de la
                cerámica o que se formen hongos en la base.</li>
            <li>¡Cuidado con los cambios bruscos de temperatura! Por más de que nuestros objetos sean aptos microondas y
                horno, el choque térmico puede hacer que se rompa la pieza.
            </li>
            <li>No dejar las tazas o mates en contacto con café, té o yerba por largo tiempo. El esmalte puede teñirse.
                Tampoco exponer al fuego directo, ya que esto puede provocar que el esmalte se queme y cambie su color.
            </li>
            <li>A largo plazo, muchas veces pasa que las piezas se craquelan. Esto no afecta al funcionamiento y no es
                motivo de reemplazo de producto.</li>
            <li>Todos los objetos se pueden lavar de manera regular, con agua y jabón, y también en lavavajillas.</li>
        </ul>
    </div>
  )
}
