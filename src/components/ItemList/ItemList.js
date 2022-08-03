

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import { useEffect, useState } from "react";
import getFetch from "../../Data/Data";
import Item from "../Item/Item";



export default function ItemList ()  {

    const [instrumentos, getInstrumentos] = useState([])
    const [loading, setLoading] = useState(true) //Agregar la lógica de esto!!

    useEffect(() =>{
        getFetch

    .then((resp) => getInstrumentos(resp))// Capturo lo que resuelve la promesa
      .catch((err) => console.log(err))// capturo si hay algun error
      .finally(() => setLoading(false))// se ejecuta por defecto

    
    }, [])

    return (

       <div>
         
         <Container fluid className="container">
             <Row className="justify-content-md-center">

            {
            loading ? <h2>Cargando...</h2>:
            instrumentos.map( (instrumento) =>{
            return  (

            <Col>
                <Item 
                key={instrumento.id} 
                marca={instrumento.marca} 
                categoria={instrumento.categoria} 
                img={instrumento.img} 
                stock={instrumento.stock}
                initial={instrumento.initial} 
                />  
                </Col>
                )
                
            })
          }

        </Row>
        </Container>
    </div>

   )
}
