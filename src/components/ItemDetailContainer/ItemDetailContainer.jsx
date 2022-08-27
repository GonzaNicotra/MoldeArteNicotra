import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer() {
    const {id} = useParams();
    const [item,setItem] = useState({});

    useEffect(() => {
        const products = [
            {nombre:"Taza VyV", precio: 500, id: 123, img:'https://molde-arte.vercel.app/assets/tazaTres.webp', info: 'Esto es una taza'},
            {nombre:"Taza VyV", precio: 500, id: 456, img:'https://molde-arte.vercel.app/assets/tazaUno.webp', info: 'Esto es una taza'},];
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
