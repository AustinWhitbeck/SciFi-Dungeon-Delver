import { CharacterClass } from "../Model/Interfaces";
import ClassCard from "./ClassCard/ClassCard";


const CharacterSelect = () => {

    // Temporary Character Class List

    const classList: CharacterClass[] = [
        {
            index: 0,
            name: "Street Brawler",
            physAtk: 2,
            physDef: 2,
            magAtk: 0,
            magDef: 1
        },
        {
            index: 0,
            name: "Cyber Ninja",
            physAtk: 3,
            physDef: 1,
            magAtk: 1,
            magDef: 2
        },
        {
            index: 0,
            name: "Jedi",
            physAtk: 3,
            physDef: 1,
            magAtk: 1,
            magDef: 2
        },

    ]

    return(
        <main>
            <h2>Character Select</h2>
            <div>
            {classList.map((characterClass, index) => 
                <ClassCard
                    key={`${characterClass.name}-${index}`}
                    characterClass={characterClass}
                />
            )}
            </div>

        </main>
    )
}

export default CharacterSelect;