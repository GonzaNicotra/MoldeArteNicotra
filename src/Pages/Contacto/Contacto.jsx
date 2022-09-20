import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contacto.css';
import moment from 'moment/moment';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../services';


export default function Contacto() {

    const [ contacto, setContacto ] = useState({
        cont:{
          nombre:'',
          email:'',
          mensaje:'',
        },
        fecha: moment().format('DD MM YYYY hh:mm:ss a'),
      });

      const { cont: { email, nombre, mensaje }} = contacto;

      const handleChange = (e)=>{
        const { name, value } = e.target
        setContacto({
            ...contacto,
            cont: {
                ...contacto.cont,
                [name]: value,
            },
        });
    }
    
    const setFirebase = async (mensaje) => {
    try {
        const col = collection( db, 'mensajes' )
        await addDoc(col, mensaje).then(function(){
            window.location.href= "/"
           })
        alert('Mensaje enviado correctamente')
        }catch (error){
            console.log(error);
        }
    }

  return (
    <div className='contacto d-flex justify-content-center'>
        <Form className='col-sm-12 col-md-4 p-4 row '>
            <h1 className='mb-4'>Contactanos</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control value={nombre} onChange={handleChange} type="text" placeholder="Nombre" name='nombre'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email:</Form.Label>
                <Form.Control value={email} onChange={handleChange} type="email" placeholder="Email" name='email'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje:</Form.Label>
                <Form.Control value={mensaje} onChange={handleChange} as="textarea" rows={3} name='mensaje'/>
            </Form.Group>
            <Button className='bComprar' onClick={() => setFirebase(contacto) }>
            Submit
            </Button>
        </Form>
    </div>
  )
}

