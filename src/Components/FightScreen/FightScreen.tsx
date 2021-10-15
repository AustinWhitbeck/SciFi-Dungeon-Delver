import { useContext } from "react";
import { MonsterContext } from "../../ContextProvider/CurrentMonsterProvider";
import { UserContext } from "../../ContextProvider/UserContextProvider";
import ActivePlayer from "../ActivePlayer/ActivePlayer";
import ActiveMonster from "../Monsters/ActiveMonster";


const FightScreen = () => {

    // context providers
    const {userStats, updateUserStats} = useContext(UserContext);
    const {currentMonster, updateCurrentMonster} = useContext(MonsterContext);

    // temp health
    let damagedHealth: number = 0;


    // reuseable functions

    const damageComparison = () => {
        let damage = userStats.physAtk - currentMonster.physDef;
        // let damagedHealth: number = 0;
        if (damage <= 0) {
            damagedHealth = currentMonster.health;
            console.log("you did none, or negative damage")
        }
        else if ((currentMonster.health - damage) > 0){
            damagedHealth = currentMonster.health - damage;
            console.log(currentMonster.health, "this is post damage and not dropping to 0 (physical)")
        } 
    }


    const userPhysAttack = () => {
        damageComparison();
        
        updateCurrentMonster({
            monsterName: currentMonster.monsterName,
            health: damagedHealth,
            physAtk: currentMonster.physAtk,
            physDef: currentMonster.physDef,
            magAtk: currentMonster.magAtk,
            magDef: currentMonster.magDef,
            xp: currentMonster.xp
        })
        console.log(currentMonster);
    }

    const userMagAttack = () => {
        damageComparison();
        
        updateCurrentMonster({
            monsterName: currentMonster.monsterName,
            health: damagedHealth,
            physAtk: currentMonster.physAtk,
            physDef: currentMonster.physDef,
            magAtk: currentMonster.magAtk,
            magDef: currentMonster.magDef,
            xp: currentMonster.xp
        })
        console.log(currentMonster);
    }

 


    return(
        <main>
            <section>
                
                    <button onClick={userPhysAttack}>Physical Attack</button>
                    <button onClick={userMagAttack}>Magic Attack</button>
            
            </section>
            <section>
                <div>
                    <ActiveMonster/>
                </div>
                <div>
                    <ActivePlayer/>
                </div>
            </section>
        </main>
    )
}

export default FightScreen;