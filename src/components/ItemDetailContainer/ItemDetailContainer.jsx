import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../services';

export default function ItemDetailContainer() {
    const {id} = useParams();
    const [item,setItem] = useState([]);

    // useEffect(() => {
    //     const products = [
    //         {nombre:"Taza VyV", precio: 500, id: 123, img:'https://molde-arte.vercel.app/assets/tazaTres.webp', info: 'Esto es una taza', Stock:14, category: 'tazas'},
    //         {nombre:"Mate", precio:500, id:789, img:'https://galeriamarte.netlify.app/Assets/IMG_7875.jpg', info: 'Esto es un mate', Stock:15, category: 'mates'},
    //         {nombre:"Taza VyT", precio: 500, id: 456, img:'https://molde-arte.vercel.app/assets/tazaUno.webp', info: 'Esto es una taza', Stock:10, category: 'tazas'},
    //         {nombre:"Bowl", precio:500, id:124, img:'https://molde-arte.vercel.app/assets/tazaTres.webp', info: 'Esto es una taza', Stock:10,category: 'bowls'},
    //         {nombre:"Taza VyN", precio:520 , id:457, img:'https://molde-arte.vercel.app/assets/tazaUno.webp',info: 'Esto es una taza', Stock:10, category: 'tazas'}
    //       ];
    //     new Promise((resolve) => {

    //         setTimeout(() => {
    //           resolve(products.find((element) => element.id == id));
    //         }, 2000)
    //     }).then((data) => {
    //       setItem(data);
    //     })
    // }, [id])
    
    useEffect(() => {
      const getColData = async () => {
        try {
          const data = collection(db, 'productos');
          const col = await getDocs(data);
          const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data()});
          const res2 = res.find(element=>element.id === id);
          setItem(res2)
        } catch (error){
          console.log(error);
        }
      }
    getColData()
      return () => {
        
      }
    }, [id])
    


  return (
    <>
    <ItemDetail item={item}/>
    </>
  )
}
