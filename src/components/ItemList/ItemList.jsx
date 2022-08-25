import React from 'react';
import Item from '../Item/Item';

export default function ItemList({items}) {
  return (
    <div className='d-flex flex-row mb-3'>
         {items.map((item, indx) =>
            <Item key={indx} id={item.id} nombre={item.nombre} precio={item.precio} img={item.img}/>
        )}
    </div>
  )
}
