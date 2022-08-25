import Navbar from './components/Navbar/Navbar.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer row={4}/>
    </div>
  );
}

export default App;
