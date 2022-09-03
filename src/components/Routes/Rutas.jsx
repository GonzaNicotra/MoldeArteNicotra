import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Navbar from '../Navbar/Navbar';

export default function Rutas() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:categoryid' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
