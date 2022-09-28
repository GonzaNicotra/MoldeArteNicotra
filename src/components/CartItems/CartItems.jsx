import React from 'react'
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../../Context/CartContext';
import './CartItems.css';
import { Button } from 'react-bootstrap';

export default function CartItems({ nombre, precio, quantity, id, img }) {

    const {removeItem} = useContext(CartContext)

  return (
        <Container className="text-center border-bottom">
          <Row className='d-flex'>
            <Col className='p-2'>
              <img className='imgItem' src={img} alt={nombre} />
            </Col>
            <Col className='p-4 cartText'>
              <h3 className='fw-bold'>{nombre}</h3>
            </Col>
            <Col className='p-4 cartText'>
              <p className='fw-bold'>Precio: ${precio}</p>
            </Col>
            <Col className='p-4 cartText'>
              <p className='fw-bold'>Cantidad: {quantity}</p>
            </Col>
            <Col className='p-4'>
              <Button variant='light' className='bComprar' onClick={() => removeItem(id)} >
                Remover</Button>
            </Col>
          </Row>
        </Container>
  )
}
