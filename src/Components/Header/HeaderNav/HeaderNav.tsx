

// CSS import //
import { Link } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {

    return(
        <nav className="HeaderNavContainer">
            <ul className="NavOptions">
                {/* <li>menu</li>
                <li>inventory</li>
                <li>logout</li> */}
                <Link to="/"><button>Home</button></Link>
                <Link to="/FightScreen"><button>Fight Screen</button></Link>
            </ul>
        </nav>
    )
}

export default HeaderNav;