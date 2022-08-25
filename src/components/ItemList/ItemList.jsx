import React from 'react';
import Item from '../Item/Item';
import Container from 'react-bootstrap/Container';

export default function ItemList({items}) {
  return (
    <Container>
    <div className='d-flex flex-row flex-wrap justify-content-around'>
         {items.map((item, indx) =>
            <Item key={indx} id={item.id} nombre={item.nombre} precio={item.precio} img={item.img}/>
        )}
    </div>
    </Container>
  )
}
