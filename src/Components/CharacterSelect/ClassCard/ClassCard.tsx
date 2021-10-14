import { FormEvent, useContext } from "react";
import { CharacterClass } from "../../Model/Interfaces";
import { UserContext} from "../../../ContextProvider/UserContextProvider"

interface Props {
    characterClass: CharacterClass;
    updateUserProfile: (characterClass: CharacterClass) => void;
}

const ClassCard = ({characterClass, updateUserProfile}: Props) => {

    const {userStats, updateUserStats} = useContext(UserContext);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(userStats);
        console.log(characterClass);
        updateUserStats(characterClass);
        console.log(userStats);
    }

    return(
        <main>
            <form action="submit" onSubmit={handleSubmit}>
            <h4>{characterClass.name}</h4>
            <div>
                <p>Physical Attack: {characterClass.physAtk}</p>
                <p>Physical Defense: {characterClass.physDef}</p>
            </div>
            <div>
                <p>Magic Attack: {characterClass.magAtk}</p>
                <p>Magic Defense: {characterClass.magDef}</p>
            </div>
            <button>Choose Class</button>
            </form>
            
        </main>
    )
}

export default ClassCard;