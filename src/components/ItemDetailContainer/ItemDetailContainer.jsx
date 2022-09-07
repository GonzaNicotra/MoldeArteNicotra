import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer() {
    const {id} = useParams();
    const [item,setItem] = useState([]);

    useEffect(() => {
        const products = [
            {nombre:"Taza VyV", precio: 500, id: 123, img:'https://molde-arte.vercel.app/assets/tazaTres.webp', info: 'Esto es una taza', Stock:14},
            {nombre:"Mate", precio:500, id:789, img:'https://galeriamarte.netlify.app/Assets/IMG_7875.jpg', info: 'Esto es un mate', Stock:15},
            {nombre:"Taza VyV", precio: 500, id: 456, img:'https://molde-arte.vercel.app/assets/tazaUno.webp', info: 'Esto es una taza', Stock:10},];
        new Promise((resolve) => {

            setTimeout(() => {
              resolve(products.find((element) => element.id == id));
            }, 2000)
        }).then((data) => {
          setItem(data);
        })
    }, [id])
    

  return (
    <>
    <ItemDetail item={item}/>
    </>
  )
}
