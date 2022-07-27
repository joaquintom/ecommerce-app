
import './Header.css';

function Header (props) {

    return(

        <header className="mt-5">
            <h1>{props.titulo}</h1>
        </header>

    );
}

export default Header;