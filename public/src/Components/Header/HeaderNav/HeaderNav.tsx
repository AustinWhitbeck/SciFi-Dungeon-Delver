


import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoryChapterContext } from '../../../ContextProvider/CurrentChapterProvider';

// CSS import //
import './HeaderNav.css';

const HeaderNav = () => {

    const {storyChapter} = useContext(StoryChapterContext);

    return(
        <nav className="HeaderNavContainer">
            <ul className="NavOptions">
                {/* <li>menu</li>
                <li>inventory</li>
                <li>logout</li> */}
                <span>Current Chapter: {storyChapter}</span>
                {/* <Link to="/"><button>Home</button></Link>
                <Link to="/FightScreen"><button>Fight Screen</button></Link> */}
            </ul>
        </nav>
    )
}

export default HeaderNav;