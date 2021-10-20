import { Link } from "react-router-dom"

// CSS
import "./BackButton.css";


const BackButton = () => {

    return(
        <main className="BackButtonContainer">
            <Link to="/"><button className="BackButton">Back</button></Link>
        </main>
    )
}

export default BackButton;