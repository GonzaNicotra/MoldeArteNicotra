import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'

function Item({id, nombre, precio, img}) {
  return (
        <Card className='cardProd' style={{ width: '11rem' }}>
        <Card.Img id='img' variant="top" src={img} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>${precio}</Card.Text>
            <Card.Text>Id:{id}</Card.Text>
            <Button className='bComprar'>Ver Producto</Button>
        </Card.Body>
        </Card>
  );
}

export default Item;