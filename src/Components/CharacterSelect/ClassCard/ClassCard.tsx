import { CharacterClass } from "../../Model/Interfaces";

interface Props {
    characterClass: CharacterClass;
}

const ClassCard = ({characterClass}: Props) => {

    return(
        <main>
            <h4>{characterClass.name}</h4>
            <div>
                <p>Physical Attack: {characterClass.physAtk}</p>
                <p>Physical Defense: {characterClass.physDef}</p>
            </div>
            <div>
                <p>Magic Attack: {characterClass.magAtk}</p>
                <p>Magic Defense: {characterClass.magDef}</p>
            </div>
            
        </main>
    )
}

export default ClassCard;