import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../Context/CartContext';
import { Button } from 'react-bootstrap';

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
                <Card.Text className='visually-hidden' >Id:{id}</Card.Text>
                <Card.Text className='cardText'>{info}</Card.Text>
                <Card.Text className='cardPrice'>${precio}</Card.Text>
                { count ? <>
                <div>
                  <Link to='/cart'><Button variant='light' className='bComprar'>Ir al carrito</Button> </Link>
                </div>
                <div>
                  <Link to={'/productos'}><Button variant='light' className='bComprar'>Agregar más productos</Button></Link>
                </div>
                </> :
                  <ItemCount stock={stock} initial={0} onAdd={onAdd}/> }
                <Card.Text className='stockText' >Stock disponible: {stock}</Card.Text>
        </Card.Body>
        </Card>

  )
}
