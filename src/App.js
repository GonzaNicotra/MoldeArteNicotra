import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Rutas from './components/Routes/Rutas';
import { CartProvider } from './Context/CartContext';



function App() {
  return (
    <div className="App">
      <CartProvider>
        <Rutas/>
      </CartProvider>

    </div>
  );
}

export default App;
