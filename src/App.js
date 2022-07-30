


import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header'
import Container from './components/Container';
import Caja from './components/Caja';
import Contador from './components/Contador';
import ItemCount from './components/itemCount/itemCount';



//import getFetch from './components/Data';
//import { useEffect, useState } from 'react';
//import { itemListContainer } from './itemListContainer/itemListContainer';

//import {fontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
//import { faBootstrap } from '@fortawesome/free-brands-svg-icons';



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

        <div>
          <ItemCount></ItemCount>
        </div>
      
     

    </div>

  );
}

export default App;
