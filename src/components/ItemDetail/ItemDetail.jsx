import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

export default function ItemDetail({item}) {
    const {id, nombre, precio, img, info} = item;
    const onAdd = (counter) => {
      console.log('el valor es:', counter);
    }

  return (
        <Card className='cardDetail '>
            <Card.Body>
            <Card.Img className='imgDetail' variant="top" src={img} />
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>Id:{id}</Card.Text>
                <Card.Text>{info}</Card.Text>
                <Card.Text>${precio}</Card.Text>
                <ItemCount stock={4} initial={0} onAdd={onAdd}/>
        </Card.Body>
        </Card>

  )
}
