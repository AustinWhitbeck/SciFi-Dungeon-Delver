import HeaderNav from "./HeaderNav/HeaderNav";

// CSS Import  //
import './Header.css';
import { useContext } from "react";
import { UserContext } from "../../ContextProvider/UserContextProvider";


const Header = () => {

    const {userStats} = useContext(UserContext);

    return(
        <header className="HeaderContainer">
            <div>
                <h2 className="HeaderUserName">{userStats.userName}</h2>
            </div>
            <HeaderNav/>
        </header>
    )
}


export default Header;