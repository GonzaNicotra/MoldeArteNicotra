import './ItemListContainer.css';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer({greeting}) {
  
  const onAdd = (counter) => {
    console.log('el valor es:', counter);
  }

  return (
    <div>
      <span className='titulo'>{greeting}</span>
      <ItemCount stock={4} initial={0} onAdd={onAdd}/>
    </div>
  )
}
