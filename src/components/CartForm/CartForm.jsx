import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { CartContext } from '../../Context/CartContext';
import db from '../../services';
import './CartForm.css';
import moment from 'moment/moment';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader';

export default function CartForm() {

  const { items, clear } = useContext(CartContext);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  
  const [formulario, setFormulario ] = useState({
    buyer:{
      nombre:'',
      apellido:'',
      email:'',
      telefono:'',
    },
    compra: {items},
    fecha: moment().format('DD MM YYYY hh:mm:ss a'),
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
  if(nombre === "" || apellido === "" || email === "" || telefono === "" ){
    setLoading(false)
    MySwal.fire({
        title: <strong>Error!</strong>,
        html: <i>Faltan completar los datos</i>,
        icon: 'error'
      })}else{
  try {
    setLoading(true)
    const col = collection( db, 'ordenes' )
    await addDoc(col, orden).then(({id}) =>{
      MySwal.fire({
        title: <strong>Gracias por su compra!</strong>,
        html: <i>Su ID de compra es: {id}</i>,
        icon: 'success'
      })
    }).then(() => {
      navigate('/')
    }).then(clear)
  }catch (error){
    console.log(error);
  }}
}

const updateFirebase = async (formulario)=>{
  updateStock(items)
  setInFirebase(formulario) 
}

const updateStock = (items)=>{
  setLoading(true)
  items.forEach(e=>{
  const {id, stock, quantity} = e
  let newStock = stock - quantity
  const producto = doc(db,"productos", id)
  updateDoc(producto,{stock: newStock})
  })
  
}

  return (
    <>{
      loading === true ? (<SpinnerLoader/>):
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
      <Button  variant='light' className='fComprar' onClick={() => updateFirebase(formulario) } >Terminar Compra</Button>
  </Form>
}
</>
)}
