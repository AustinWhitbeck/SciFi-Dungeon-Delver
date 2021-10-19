import { FormEvent, useContext } from "react";
import { MonsterContext } from "../../ContextProvider/CurrentMonsterProvider";
import { MonsterStats } from "../Model/Interfaces";


const ActiveMonster = () => {

    // Current Monster 

    const {currentMonster, updateCurrentMonster} = useContext(MonsterContext);


    // Monster Array Options

    const allMonsters: MonsterStats[] = [
        {
            monsterName: "Space Goblin",
            health: 20,
            physAtk: 2,
            physDef: 1,
            magAtk: 1,
            magDef: 0,
            xp: 5
        },
        {
            monsterName: "Void Appartion",
            health: 25,
            physAtk: 2,
            physDef: 6,
            magAtk: 2,
            magDef: 1,
            xp: 5
        }
    ]

    const assignRandomMonster = (e: FormEvent) => {
        e.preventDefault();

        let randomizedMonster = allMonsters[Math.floor(Math.random() * 2)];
        console.log(randomizedMonster);
        console.log(allMonsters);
        updateCurrentMonster(randomizedMonster);

        
    }

    return(
        <main>
            <form action="submit" onSubmit={assignRandomMonster}>
                <button onClick={assignRandomMonster}>Assign Random Monster</button>
            </form>
            <section>
                <h3>A wild {currentMonster.monsterName}</h3>
                <section>Health: {currentMonster.health}</section>
                    <ul>
                        <li>Magic Attack:{currentMonster.magAtk}</li>
                        <li>Magic Defense: {currentMonster.magDef}</li>
                        <li>Physical Attack:{currentMonster.physAtk}</li>
                        <li>Physical Defense: {currentMonster.physDef}</li>
                    </ul>
            </section>
        </main>
    )
}

export default ActiveMonster;