
// CSS
import './CharacterPortrait.css';


interface Props  {
    image: string;
}


const CharacterPortrait = ({image}: Props) => {

    return (
        <main className="CharacterImageContainer">
            <img className="CharacterImage" src={image} alt="CharacterImages" />
        </main>
    )
}

export default CharacterPortrait;