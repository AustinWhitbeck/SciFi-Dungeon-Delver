import { useContext } from "react";
import { MonsterContext } from "../../ContextProvider/CurrentMonsterProvider";


const ActiveMonster = () => {

    // Current Monster 
    const {currentMonster} = useContext(MonsterContext);

    return(
        <main>
            <section>
                <h3>A wild {currentMonster.monsterName}</h3>
                <div className="monsterImage"></div>
                <section>Health: {currentMonster.health}</section>
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