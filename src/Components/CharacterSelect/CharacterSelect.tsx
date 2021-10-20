import { FormEvent, useContext } from "react";
import { UserContext } from "../../ContextProvider/UserContextProvider";
import BackButton from "../Buttons/BackButton/BackButton";
import { CharacterClass } from "../Model/Interfaces";
import ClassCard from "./ClassCard/ClassCard";

// CSS

import "./CharacterSelect.css";


const CharacterSelect = () => {

    // Imported Current User profile, use to update with options

    const {userStats, updateUserStats} = useContext(UserContext);


    // Temporary Character Class List

    const classList: CharacterClass[] = [
        {
            index: 1,
            name: "Street Brawler",
            health: 14,
            physAtk: 5,
            physDef: 2,
            magAtk: 0,
            magDef: 1
        },
        {
            index: 2,
            name: "Cyber Ninja",
            health: 8,
            physAtk: 3,
            physDef: 1,
            magAtk: 1,
            magDef: 2
        },
        {
            index: 3,
            name: "Mystic Sword",
            health: 10,
            physAtk: 3,
            physDef: 1,
            magAtk: 1,
            magDef: 2
        },

    ]

    // Function to update user profile to the selected choice




    return(
        <main className="CharacterSelectContainer">
            <h2>Character Select</h2>
            <section>
                <h3>Current User Profile</h3>
                <ul>
                    <li>Class Name: {userStats.name}</li>
                    <li>Magic Attack: {userStats.magAtk}</li>
                    <li>Magic Defense: {userStats.magDef}</li>
                    <li>Physical Attack: {userStats.physAtk}</li>
                    <li>Physical Defense: {userStats.physDef}</li>
                </ul>
            </section>
            <section className="ClassOptionsContainer">
            {classList.map((characterClass, index) => 
                <ClassCard
                    key={`${characterClass.name}-${index}`}
                    characterClass={characterClass}
                    updateUserProfile={ (characterClass) => updateUserStats(characterClass)}
                />
            )}
            </section>
            <BackButton/>
        </main>
    )
}

export default CharacterSelect;