import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css';

export default function ItemDetail({item}) {
    const {id, nombre, precio, img} = item;
  return (
        <Card className='cardDetail '>
            <Card.Body>
            <Card.Img className='imgDetail' variant="top" src={img} />
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>Id:{id}</Card.Text>
                <Card.Text>${precio}</Card.Text>
                <Card.Text></Card.Text>
                <Button className='bComprar' variant="primary">Comprar</Button>
        </Card.Body>
        </Card>

  )
}
