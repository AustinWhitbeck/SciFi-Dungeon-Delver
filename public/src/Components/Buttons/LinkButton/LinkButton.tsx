import { Link } from "react-router-dom";

// CSS
import './LinkButton.css';

interface Props {
    link: string;
    text?: string;
    onClick?: () => void;
}

const LinkButton = ({link, onClick, text}: Props) => {

    return(
        <main className="LinkButtonContainer">
            <Link to={link}>
                <button className="LinkButton" onClick={onClick}>{text}</button>
            </Link>
        </main>
    )
}

export default LinkButton;