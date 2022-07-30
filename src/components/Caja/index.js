
import { useState } from 'react';
import './Caja.css';


function Caja (props) {

    const [mostrar, setMostrar] = useState(false);


    function mostrarOcultarMostrador () {

        setMostrar(!mostrar);

    }

    return (
        
    <div className="caja">
    {props.saludo}
    <input type="checkbox" id="mostrarClick" onClick={mostrarOcultarMostrador} /> {""} <label htmlForm='mostrarClick'>Mostrar boton contador</label>
    
    {mostrar ? props.children : null}
    
    </div>

    );
}

export default Caja;