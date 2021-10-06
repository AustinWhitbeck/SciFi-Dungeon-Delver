import HeaderNav from "./HeaderNav/HeaderNav";

// CSS Import  //
import './Header.css';


const Header = () => {

    return(
        <header className="HeaderContainer">
            <div>
                <h2 className="HeaderUserName">UserName</h2>
            </div>
            <HeaderNav/>
        </header>
    )
}


export default Header;