import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Inicio from '../../Pages/Inicio/Inicio';
import Diseños from '../../Pages/Diseños/Diseños';
import Cuidados from '../../Pages/Cuidados/Cuidados';

export default function Rutas() {

  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Inicio/>} />
                <Route path='/productos' element={<ItemListContainer/>} />
                <Route path='/category/:category' element={<ItemListContainer/>} />
                <Route path='/personalizados' element={<Diseños/>} />
                <Route path='/cuidados' element={<Cuidados/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}
