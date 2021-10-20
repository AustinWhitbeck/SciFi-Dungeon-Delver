import { useContext } from "react";
import { MonsterContext } from "../../ContextProvider/CurrentMonsterProvider";
import { UserContext } from "../../ContextProvider/UserContextProvider";
import ActivePlayer from "../ActivePlayer/ActivePlayer";
import RandomMonsterButton from "../Buttons/RandomMonsterButton/RandomMonsterButton";
import ActiveMonster from "../Monsters/ActiveMonster";

// CSS
import "./FightScreen.css";


const FightScreen = () => {

    // context providers
    const {userStats, updateUserStats} = useContext(UserContext);
    const {currentMonster, updateCurrentMonster} = useContext(MonsterContext);

    // temp health
    let damagedHealth: number = 0;


    // reuseable functions

    const randomisedDamage2 = () => {
        return Math.floor(Math.random() * 2) 
    }

    const damageComparisonUser = () => {
        let damage = (userStats.physAtk + randomisedDamage2()) - currentMonster.physDef;
        console.log("user attack and randomized damage", damage);
        // let damagedHealth: number = 0;
        if (damage <= 0) {
            damagedHealth = currentMonster.health;
            console.log("you did none, or negative damage")
        }
        else if ((currentMonster.health - damage) > 0){
            damagedHealth = currentMonster.health - damage;
            console.log(currentMonster.health, "this is post damage and not dropping to 0 (physical)")
        } 


    }// User Attacks


    const userPhysAttack = () => {
        damageComparisonUser();
        
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
        damageComparisonUser();

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


    // Monster attack
    

 


    return(
        <main className="FightScreenContainer">
            <section className="UserAbilityButtons">
                    <button onClick={userPhysAttack}>Physical Attack</button>
                    <button onClick={userMagAttack}>Magic Attack</button>
                    <RandomMonsterButton/>
            </section>
            <section className="UserVsPlayerContainer">
                    <ActiveMonster/>
                    <ActivePlayer/>
            </section>
        </main>
    )
}

export default FightScreen;