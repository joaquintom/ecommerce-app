

import Card from 'react-bootstrap/Card';
import ItemCount from "../itemCount/ItemCount";


function Item ({key, marca, categoria, img, stock, initial}) {

    return  (
        
        
    <Card style={{ width: '18rem', margin:'5%'}}>

        <Card.Img variant="top" src={img} />
            
            <Card.Body>

                <Card.Title>{key}</Card.Title>
                <Card.Title>Marca: {marca}</Card.Title>
                <Card.Text>Instrumento: {categoria}</Card.Text>

            </Card.Body>

            <Card.Body>
            
                <ItemCount stock={stock} initial={initial} ></ItemCount>
            
            </Card.Body>
      
        </Card>
            
    );
}

export default Item;

