import { useState } from "react";
import {useEffect} from 'react';


function Contador() {
    //Decirle a react que estamos interactuando con el estado.
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);
    
   
     useEffect(() => {
            console.log('Contador mounted y renderizado')
    
        return() => {
            console.log('previo, contador listo para ser desmontado')
        }
        });

        useEffect(() => {
            console.log('cambio contador')
 
              return() => {
                  console.log('contador listo para ser desmontado')
           }
           }, [contador]);
            //cada vez que contador cambie

            useEffect(() => {
                console.log('cambio contador')
     
                  return() => {
                      console.log('contador listo para ser desmontado')
               }
               }, [contador2]);
         
         useEffect(() => {
               console.log('contador montado')
    
                 return() => {
                     console.log('contador listo para ser desmontado')
              }
              }, []);
              

    function agregarAlContador (){

        setContador(contador +1);

        
    }

    function agregarAlContador2 (){

        setContador2(contador2 +1);

      
    }



    return (

        <div>

            <p>
            {contador}
            {contador2}
          
            </p>
            
            <br />
            
            <button onClick={agregarAlContador}>contador 1</button>
            <button onClick={agregarAlContador2}>contador 2</button>  

        </div>
        
    );
}

export default Contador;

//al apretar el boton, inicia el ciclo, cambia el estado, React se da cuenta y renderiza todo el componente de nuevo.
