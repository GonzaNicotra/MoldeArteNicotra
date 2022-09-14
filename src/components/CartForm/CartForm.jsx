import React from 'react'
import Form from 'react-bootstrap/Form';


export default function CartForm() {



  return (
    <Form className='col-sm-12 col-md-4 p-5 row d-flex justify-content-center text'>
      <h2>Datos de Compra</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Apellido" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" placeholder="Telefono" required/>
      </Form.Group>
      <button className='bComprar' type="submit">
        Terminar Compra
      </button>
  </Form>
  )
}
