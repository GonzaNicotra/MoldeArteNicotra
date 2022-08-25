import './ItemListContainer.css';
import React, { useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';


export default function ItemListContainer() {
  
  const [items, setItems] = useState([])
  
  useEffect(() => {
    const products = [
      {nombre:"Taza VyV", precio:500, id:123, img:'https://molde-arte.vercel.app/assets/tazaTres.webp'},
      {nombre:"Taza VyN", precio:520 , id:456, img:'https://molde-arte.vercel.app/assets/tazaUno.webp'}
    ];
    new Promise((resolve) => {

        setTimeout(() => {
          resolve(products)
        }, 2000);
    }).then((data) => {
      setItems(data)
    })
  }, [])

  const onAdd = (counter) => {
    console.log('el valor es:', counter);
  }

  return (
    <div>
      <ItemList items={items}/>
      <ItemCount stock={4} initial={0} onAdd={onAdd}/>
    </div>
  )
}
