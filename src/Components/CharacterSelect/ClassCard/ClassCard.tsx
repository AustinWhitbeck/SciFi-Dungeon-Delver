import { CharacterClass } from "../../Model/Interfaces";

interface Props {
    characterClass: CharacterClass;
    updateUserProfile: (characterClass: CharacterClass) => void;
}

const ClassCard = ({characterClass, updateUserProfile}: Props) => {

    const handleSubmit = () => {
        updateUserProfile(characterClass);
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