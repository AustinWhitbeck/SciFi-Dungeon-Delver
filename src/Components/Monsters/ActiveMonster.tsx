import { useContext } from "react";
import { MonsterContext } from "../../ContextProvider/CurrentMonsterProvider";


// CSS
import "./ActiveMonster.css";


const ActiveMonster = () => {

    // Current Monster 
    const {currentMonster} = useContext(MonsterContext);

    const monsterVisualHealth: number = (currentMonster.currentHealth / currentMonster.health) * 100;

    return(
        <main>
            <section>
                <h3>{currentMonster.monsterName}</h3>
                <div className="monsterImageContainer">
                    <img className="MonsterImage" src={currentMonster.image} alt={currentMonster.monsterName} />
                    <div style={{width: `${monsterVisualHealth}%`, height: "50px", backgroundColor: "red"}}></div>
                </div>
                    {/* <ul>
                        <li>Magic Attack: {currentMonster.magAtk}</li>
                        <li>Magic Defense: {currentMonster.magDef}</li>
                        <li>Physical Attack: {currentMonster.physAtk}</li>
                        <li>Physical Defense: {currentMonster.physDef}</li>
                    </ul> */}
            </section>
        </main>
    )
}

export default ActiveMonster;