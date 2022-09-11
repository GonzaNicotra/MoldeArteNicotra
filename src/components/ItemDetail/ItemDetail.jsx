import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../Context/CartContext';

export default function ItemDetail({item}) {
    const {id, nombre, precio, img, info, stock} = item;
    const {addItem} = useContext(CartContext);
    const [count, setCounter] = useState(0);
    const onAdd = (counter) => {
      setCounter(counter)
      addItem(item, counter);
    }

  return (
        <Card className='cardDetail'>
            <Card.Body>
            <Card.Img className='imgDetail' variant="top" src={img} />
                <Card.Title className='cardTitle'>{nombre}</Card.Title>
                <template>
                <Card.Text>Id:{id}</Card.Text>
                </template>
                <Card.Text className='cardText'>{info}</Card.Text>
                <Card.Text className='cardPrice'>${precio}</Card.Text>
                { count ? <>
                <div>
                  <Link to='/cart'><button className='bComprar'>Ir al carrito</button> </Link>
                </div>
                <div>
                  <Link to={'/productos'}><button className='bComprar'>Agregar más productos</button></Link>
                </div>
                </> :
                  <ItemCount stock={stock} initial={0} onAdd={onAdd}/> }
        </Card.Body>
        </Card>

  )
}
