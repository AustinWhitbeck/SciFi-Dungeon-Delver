import { useContext } from "react";
import { MonsterContext } from "../../ContextProvider/CurrentMonsterProvider";


// CSS
import "./ActiveMonster.css";


const ActiveMonster = () => {

    // Current Monster 
    const {currentMonster} = useContext(MonsterContext);

    return(
        <main>
            <section>
                <h3>{currentMonster.monsterName}</h3>
                <div className="monsterImageContainer">
                    <img className="MonsterImage" src={currentMonster.image} alt={currentMonster.monsterName} />
                </div>
                <section>Health: {currentMonster.currentHealth}</section>
                    <ul>
                        <li>Magic Attack: {currentMonster.magAtk}</li>
                        <li>Magic Defense: {currentMonster.magDef}</li>
                        <li>Physical Attack: {currentMonster.physAtk}</li>
                        <li>Physical Defense: {currentMonster.physDef}</li>
                    </ul>
            </section>
        </main>
    )
}

export default ActiveMonster;