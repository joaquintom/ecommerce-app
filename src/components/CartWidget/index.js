

//CartWidget
import iconCart from './icon-cart.png'
import {fontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';  


function CartWidget () {
    
    return (

        <img src={iconCart} width="40px"/>
    //<fontAwesomeIcon icon={faCartShopping} />
       
    )
}

export default CartWidget;