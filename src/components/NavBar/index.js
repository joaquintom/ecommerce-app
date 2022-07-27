
//NavBar
import logo from './logo.png';
import CartWidget from '../CartWidget';


 
export default function NavBar () {
    
    return (
         
 <nav className="navbar fixed-top navbar-expand-lg bg-light">
   
     <div className="container">
                <img src={logo} alt="" width="70px"/>
                    
        <div className="collapse  navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Ofertas</a>
                    </li>
                    <li className="nav-item">
                    <CartWidget/>
                    </li>
                    
                </ul>
              
        </div>
                    
    </div>
   
</nav>

        
    )
}