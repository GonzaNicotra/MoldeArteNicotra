import React, { useEffect } from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cart/Cart';

export default function Rutas() {

    useEffect(() => {
      
    
      return () => {
        
      }
    }, [])
    

  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:categoryid' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
