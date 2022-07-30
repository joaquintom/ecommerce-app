
import React from 'react';
import { useState } from "react";
import './itemCount.css'


function ItemCount () {
  
    let min = 1;
    let max = 6;

    const [agregar, setAgregar] = useState(min);


    function agregarStock () {

        const nuevaCantidad = agregar + 1;
        if  (nuevaCantidad < max ){
            setAgregar(nuevaCantidad);
        }
    }

    function quitarStock () {

        const nuevaCantidad = agregar - 1;
        if (nuevaCantidad > min) {
            setAgregar(nuevaCantidad)
        }
    }

    function onAdd () {
        alert ("agregaste " + agregar + " productos")
    }


    return(
        
        <div className="Count">
        
        <p className="numContador" >
            {agregar}
        </p>
        
        <div className="container">
            <button className="btn btn-outline-dark" onClick={quitarStock}>-</button>
            <button className="btn btn-outline-dark" onClick={agregarStock}>+</button>
            <button className="btn btn-primary active" onClick={onAdd}>Agregar al carrito</button>
        
        </div>


        </div>

    )
}

export default ItemCount; 