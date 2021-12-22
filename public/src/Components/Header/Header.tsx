import HeaderNav from "./HeaderNav/HeaderNav";

// CSS Import  //
import './Header.css';
import { useContext } from "react";
import { UserContext } from "../../ContextProvider/UserContextProvider";
import { StoryChapterContext } from "../../ContextProvider/CurrentChapterProvider";


const Header = () => {

    const {userStats} = useContext(UserContext);
    
        let hidden = "";
        if(userStats?.userName){
            hidden = "HeaderUserName";
        }

        return(
            <header className="HeaderContainer">
                <div>
                    <h2 className="HeaderUserName">{userStats?.userName} the {userStats?.name}.</h2>
                </div>
                <HeaderNav/>
            </header>
        )
    
}


export default Header;