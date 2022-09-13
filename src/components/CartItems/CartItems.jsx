import React from 'react'
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../../Context/CartContext';
import './CartItems.css'

export default function CartItems({ nombre, precio, quantity, id, img }) {

    const {removeItem} = useContext(CartContext)

  return (
        <Container className="text-center border-bottom">
          <Row className='d-flex'>
            <Col className='p-2'>
              <img className='imgItem' src={img} alt={nombre} />
            </Col>
            <Col className='p-4'>
              <h3>{nombre}</h3>
            </Col>
            <Col className='p-4'>
              <p className='fw-bold'>Precio: ${precio}</p>
            </Col>
            <Col className='p-4'>
              <p className='fw-bold'>Cantidad: {quantity}</p>
            </Col>
            <Col className='p-4'>
              <button className='bComprar' onClick={() => removeItem(id)} >
                Remover</button>
            </Col>
          </Row>
        </Container>
  )
}
