

// CSS import //
import './HeaderNav.css';

const HeaderNav = () => {

    return(
        <nav className="HeaderNavContainer">
            <ul className="NavOptions">
                <li>menu</li>
                <li>inventory</li>
                <li>logout</li>
            </ul>
        </nav>
    )
}

export default HeaderNav;