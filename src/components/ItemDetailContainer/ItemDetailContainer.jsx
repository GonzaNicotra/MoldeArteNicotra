import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../services';

export default function ItemDetailContainer() {
    const {id} = useParams();
    const [item,setItem] = useState([]);

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
