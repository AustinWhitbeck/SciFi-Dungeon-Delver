import { useContext } from "react";
import { MonsterContext } from "../../../ContextProvider/CurrentMonsterProvider";
import { MonsterStats } from "../../Model/Interfaces";



const RandomMonsterButton = () => {

    // Current Monster 

    const { allMonsters, assignRandomMonster} = useContext(MonsterContext);



    return(
        <main>
                <button onClick={assignRandomMonster}>Assign Random Monster</button>
        </main>
    )
}

export default RandomMonsterButton;