


import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header'
import Container from './components/Container';
import CartWidget from './components/CartWidget';
import {fontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


function App() {
  
  return (
        
    <div className='App'>

          <NavBar/>
          
        <div>
          <Header titulo='Tienda Online'/>
        </div>
        
        <div>
          <Container texto={'Proximamente productos destacados...'}/>
        </div>

        
    </div>

  );
}

export default App;
