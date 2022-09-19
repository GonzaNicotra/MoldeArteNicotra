import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { collection, addDoc } from 'firebase/firestore';
import { CartContext } from '../../Context/CartContext';
import db from '../../services';
import './CartForm.css';
import moment from 'moment/moment';


export default function CartForm() {

  const { items } = useContext(CartContext)
 
  const [formulario, setFormulario ] = useState({
    buyer:{
      nombre:'',
      apellido:'',
      email:'',
      telefono:'',
    },
    compra: {items},
    fecha: moment().format('DD MM YYYY hh:mm:ss'),
    total: items.reduce((pv, cv) => pv + (cv.precio * cv.quantity) ,0)
  })

  const { buyer: { email, nombre, apellido, telefono }} = formulario;

  const handleChange = (e)=>{
    const { name, value } = e.target
    setFormulario({
        ...formulario,
        buyer: {
            ...formulario.buyer,
            [name]: value,
        },
    });
};

const setInFirebase = async (orden) => {
  try {
    const col = collection( db, 'ordenes' )
    const genOrden = await addDoc(col, orden).then(localStorage.removeItem("items")).then(function(){
      window.location.href= "/"
    })
    alert('su orden se genero correctamente', genOrden.id)
  }catch (error){
    console.log(error);
  }
}


  return (
    <Form className='col-sm-12 col-md-4 p-5 row d-flex justify-content-center form'>
      <h2>Datos de Compra</h2>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control value={nombre} onChange={handleChange} type="text" placeholder="Nombre" name="nombre" required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control value={apellido} onChange={handleChange} type="text" placeholder="Apellido" name="apellido" required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control value={email} onChange={handleChange} type="email" placeholder="name@example.com" name="email" required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control value={telefono} onChange={handleChange} type="text" placeholder="Telefono" name="telefono" required/>
      </Form.Group>
      <div className='fComprar' onClick={() => setInFirebase(formulario) } >Terminar Compra</div>
  </Form>
  )
}
