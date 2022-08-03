

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Header from './components/Header'
import Container from './components/Container';
//import Caja from './components/Caja';
//import Contador from './components/Contador';
import ItemCount from './components/itemCount/ItemCount';

import ItemListContainer from './itemListContainer/ItemListContainer';

function App() {
  
    
  return (
        
    <div className='App'>

          <NavBar/>
          
        <div>
          <Header titulo='Tienda Online'/>
        </div>
        
        <div>
        <ItemListContainer></ItemListContainer>
        </div>
      
       

      
    </div>

  );
}

export default App;
