import { FormEvent, useContext } from "react";
import { CharacterClass } from "../../Model/Interfaces";
import { UserContext} from "../../../ContextProvider/UserContextProvider"

// CSS import
import "./ClassCard.css";

interface Props {
    characterClass: CharacterClass;

    index: number;
}

const ClassCard = ({characterClass, index}: Props) => {

    const {userStats, updateUserStats, classList} = useContext(UserContext);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(userStats);
        console.log(characterClass);
        updateUserStats(characterClass);
        console.log(userStats);
    }

    return(
        <main className="ClassCardContainer">
            <form action="submit" onSubmit={handleSubmit}>
            <h4>{characterClass.name}</h4>
            <section className="ClassImageContainer">
                <img className="ClassImage" src={classList[index].image} alt={userStats?.name} />
            </section>
            <div>
                <p>Physical Attack: {characterClass.physAtk}</p>
                <p>Physical Defense: {characterClass.physDef}</p>
            </div>
            <div>
                <p>Magic Attack: {characterClass.magAtk}</p>
                <p>Magic Defense: {characterClass.magDef}</p>
            </div>
            <section className="ChooseClassButtonContainer">
                <button>Choose Class</button>
            </section>
            </form>
            
        </main>
    )
}

export default ClassCard;