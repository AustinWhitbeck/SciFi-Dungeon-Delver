import { useContext } from "react";
import { CurrentUserContext } from "../../ContextProvider/CurrentUserProvider";
import { CharacterClass } from "../Model/Interfaces";
import ClassCard from "./ClassCard/ClassCard";


const CharacterSelect = () => {

    // Imported Current User profile, use to update with options

    const {CurrentUserProfile, updateCurrentUser} = useContext(CurrentUserContext);


    // Temporary Character Class List

    const classList: CharacterClass[] = [
        {
            index: 1,
            name: "Street Brawler",
            physAtk: 2,
            physDef: 2,
            magAtk: 0,
            magDef: 1
        },
        {
            index: 2,
            name: "Cyber Ninja",
            physAtk: 3,
            physDef: 1,
            magAtk: 1,
            magDef: 2
        },
        {
            index: 3,
            name: "Jedi",
            physAtk: 3,
            physDef: 1,
            magAtk: 1,
            magDef: 2
        },

    ]

    // Function to update user profile to the selected choice

    const updateUserProfile = () => {
        
    }

    return(
        <main>
            <h2>Character Select</h2>
            <div>
                <h3>Current User Profile</h3>
                <ul>
                    <li>{CurrentUserProfile.name}</li>
                </ul>
            </div>
            <div>
            {classList.map((characterClass, index) => 
                <ClassCard
                    key={`${characterClass.name}-${index}`}
                    characterClass={characterClass}
                    updateUserProfile={updateUserProfile()}
                />
            )}
            </div>

        </main>
    )
}

export default CharacterSelect;