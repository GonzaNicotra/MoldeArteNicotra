import './ItemListContainer.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import {useParams} from 'react-router-dom';
import db from '../../services';
import { collection, getDocs } from 'firebase/firestore';

export default function ItemListContainer() {
  const [items, setItems] = useState([])
  const {category} = useParams();


  useEffect(() => {
    const getColData = async () => {
      try {
      const data = collection(db, 'productos');
      const col = await getDocs(data);
      const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data()})
      const res2 = category ? res.filter(element=> element.category === category) : res
      setItems(res2)
      } catch (error) {
        console.log(error);
      }
    }
  
getColData()

    return () => {
      
    }
  }, [category])
  


  return (
    <div className='itemList'>
      <div>
        <h1>Nuestros Productos</h1>
      </div>
      <div>
        {items.length < 1 ?
        <Spinner animation="border" className='color'/>:
        <div>
          <ItemList items={items}/>
        </div>
      }
      </div>
    </div>
  )
}
