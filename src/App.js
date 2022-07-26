import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Proximamente Tienda MoldeArte!!
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/moldearteceramica/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Seguinos en Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
