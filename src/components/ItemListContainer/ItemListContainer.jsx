import './ItemListContainer.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';


export default function ItemListContainer() {
  
  const [items, setItems] = useState([])
  
  useEffect(() => {
    const products = [
      {nombre:"Taza VyV", precio:500, id:123, img:'https://molde-arte.vercel.app/assets/tazaTres.webp'},
      {nombre:"Taza VyV", precio:500, id:123, img:'https://molde-arte.vercel.app/assets/tazaTres.webp'},
      {nombre:"Taza VyV", precio:500, id:123, img:'https://molde-arte.vercel.app/assets/tazaTres.webp'},
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


  return (
    <div>
      <ItemList items={items}/>
    </div>
  )
}
