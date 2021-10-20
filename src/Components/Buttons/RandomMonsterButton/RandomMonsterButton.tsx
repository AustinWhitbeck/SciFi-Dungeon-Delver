import { useContext } from "react";
import { MonsterContext } from "../../../ContextProvider/CurrentMonsterProvider";
import { MonsterStats } from "../../Model/Interfaces";



const RandomMonsterButton = () => {

    // Current Monster 

    const {updateCurrentMonster} = useContext(MonsterContext);


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
            physDef: 2,
            magAtk: 2,
            magDef: 1,
            xp: 5
        }
    ]

    // const assignRandomMonster = (e: FormEvent) => {
    //     e.preventDefault();

    //     let randomizedMonster = allMonsters[Math.floor(Math.random() * 2)];
    //     console.log(randomizedMonster);
    //     console.log(allMonsters);
    //     updateCurrentMonster(randomizedMonster);

        
    // }

    const assignRandomMonster = () => {
        let randomizedMonster = allMonsters[Math.floor(Math.random() * 2)];
        console.log(randomizedMonster);
        console.log(allMonsters);
        updateCurrentMonster(randomizedMonster);

        
    }

    return(
        <main>
                <button onClick={assignRandomMonster}>Assign Random Monster</button>
        </main>
    )
}

export default RandomMonsterButton;