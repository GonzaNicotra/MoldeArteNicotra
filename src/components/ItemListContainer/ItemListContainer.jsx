import './ItemListContainer.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import {useParams} from 'react-router-dom';

export default function ItemListContainer() {
  const [items, setItems] = useState([])
  const {categoryid} = useParams();

  useEffect(() => {
    const products = [
      {nombre:"Taza VyV", precio:500, id:123, img:'https://molde-arte.vercel.app/assets/tazaTres.webp', category: 'tazas', info: 'Esto es una taza'},
      {nombre:"Taza VyV", precio:500, id:123, img:'https://molde-arte.vercel.app/assets/tazaTres.webp', category: 'tazas', info: 'Esto es una taza'},
      {nombre:"Taza VyV", precio:500, id:123, img:'https://molde-arte.vercel.app/assets/tazaTres.webp', category: 'tazas', info: 'Esto es una taza'},
      {nombre:"Taza VyV", precio:500, id:123, img:'https://molde-arte.vercel.app/assets/tazaTres.webp', category: 'tazas', info: 'Esto es una taza'},
      {nombre:"Taza VyN", precio:520 , id:456, img:'https://molde-arte.vercel.app/assets/tazaUno.webp', category: 'tazas', info: 'Esto es una taza'}
    ];
    new Promise((resolve) => {
      let productsFiltered = [];
        setTimeout(() => {
          productsFiltered = categoryid ? products.filter((element) => element.category == categoryid) : products 
          resolve(productsFiltered)
        }, 2000);
    }).then((data) => {
      setItems(data)
    })
  }, [categoryid])


  return (
    <div>
      {items.length ?
      <div>
      <ItemList items={items}/>
      </div> :
      <Spinner animation="border"/>
      }
    </div>
  )
}
