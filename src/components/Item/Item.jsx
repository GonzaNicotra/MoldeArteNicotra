import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

function Item({id, nombre, precio, img}) {

  const onAdd = (counter) => {
    console.log('el valor es:', counter);
  }


  return (
        <Card className='cardProd' style={{ width: '11rem' }}>
        <Card.Img id='img' variant="top" src={img} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>${precio}</Card.Text>
            <Card.Text>Id:{id}</Card.Text>
            <ItemCount stock={4} initial={0} onAdd={onAdd}/>
            <Button className='bComprar'>Ver Producto</Button>
        </Card.Body>
        </Card>
  );
}

export default Item;