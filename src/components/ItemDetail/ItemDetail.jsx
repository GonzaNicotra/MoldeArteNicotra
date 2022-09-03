import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

export default function ItemDetail({item}) {
    const {id, nombre, precio, img, info, tamaño} = item;
    const [count, setCounter] = useState(0);
    const onAdd = (counter) => {
      console.log('el valor es:', counter);
      setCounter(counter)
    }

  return (
        <Card className='cardDetail '>
            <Card.Body>
            <Card.Img className='imgDetail' variant="top" src={img} />
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>Id:{id}</Card.Text>
                <Card.Text>{info}</Card.Text>
                <Card.Text>${precio}</Card.Text>
                { count ? 
                <Link to='/cart'><button className='bComprar'>Finalizar Compra</button> </Link> : 
                <ItemCount stock={4} initial={0} onAdd={onAdd}/> }
        </Card.Body>
        </Card>

  )
}
