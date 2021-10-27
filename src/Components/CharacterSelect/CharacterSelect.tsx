import { useContext } from "react";
import { UserContext } from "../../ContextProvider/UserContextProvider";
import BackButton from "../Buttons/BackButton/BackButton";
import { CharacterClass } from "../Model/Interfaces";
import ClassCard from "./ClassCard/ClassCard";

// CSS

import "./CharacterSelect.css";
import { Link } from "react-router-dom";


const CharacterSelect = () => {

    // Imported Current User profile, use to update with options

    const {userStats, updateUserStats, classList} = useContext(UserContext);


    // Temporary Character Class List

    // const classList: CharacterClass[] = [
    //     {
    //         index: 1,
    //         name: "Street Brawler",
    //         health: 14,
    //         physAtk: 5,
    //         physDef: 2,
    //         magAtk: 0,
    //         magDef: 1,
    //         image: ""
    //     },
    //     {
    //         index: 2,
    //         name: "Cyber Ninja",
    //         health: 8,
    //         physAtk: 4,
    //         physDef: 1,
    //         magAtk: 1,
    //         magDef: 2,
    //         image: ""
    //     },
    //     {
    //         index: 3,
    //         name: "Mystic Sword",
    //         health: 10,
    //         physAtk: 2,
    //         physDef: 1,
    //         magAtk: 3,
    //         magDef: 2,
    //         image: ""
    //     },

    // ]

    // variable for going to chapter 1 if class is selected
    let startAdventure = "hidden";

    if (userStats.name === "") {
        startAdventure = "hidden";
    } else {
        startAdventure = "";
    }

    // Function to update user profile to the selected choice




    return(
        <main className="CharacterSelectContainer">
            <h2>Character Select</h2>
            <div className="UserStatsSpacing">
                <section className="CurrentUserStatsContainer">
                    <section>
                        <h3>{userStats.userName}'s Stats</h3>
                        <ul>
                            <li>Class Name: {userStats.name}</li>
                            <li>Health: {userStats.health}</li>
                            <li>Magic Attack: {userStats.magAtk}</li>
                            <li>Magic Defense: {userStats.magDef}</li>
                            <li>Physical Attack: {userStats.physAtk}</li>
                            <li>Physical Defense: {userStats.physDef}</li>
                        </ul>
                    </section>
                    <section>
                        <img className="UserImage"src={userStats.image} alt="UserCharacter" />
                    </section>
                </section>
            </div>
            <h2>Class Options</h2>
            <section className="ClassOptionsContainer">
            {classList.map((characterClass, index) => 
                <ClassCard
                    key={`${characterClass.name}-${index}`}
                    characterClass={characterClass}
                    index={index}
                />
            )}
            </section>
            <section className={`ChapterOneStart ${startAdventure}`}>
                <Link to="/StoryScreen"><button className="ToChapterButton">Go to chapter</button></Link>
            </section>
            
            <BackButton/>
            
        </main>
    )
}

export default CharacterSelect;