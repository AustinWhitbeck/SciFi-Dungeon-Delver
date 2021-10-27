import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoryChapterContext } from "../../ContextProvider/CurrentChapterProvider";
import { MonsterContext } from "../../ContextProvider/CurrentMonsterProvider";
import { UserContext } from "../../ContextProvider/UserContextProvider";
import ActivePlayer from "../ActivePlayer/ActivePlayer";
import AttackButton from "../Buttons/AttackButton/AttackButton";
import RandomMonsterButton from "../Buttons/RandomMonsterButton/RandomMonsterButton";
import DialogueBox from "../DialogueBox/DialogueBox";
import ActiveMonster from "../Monsters/ActiveMonster";

// Monster Images
import '../../Images/SpaceGoblin.jpg';

// CSS
import "./FightScreen.css";


const FightScreen = () => {

    // context providers
    const {userStats} = useContext(UserContext);
    const {currentMonster, updateCurrentMonster} = useContext(MonsterContext);
    const {nextChapter} = useContext(StoryChapterContext);

    // temp text for dialogue box
    const [dialogueText, setDialogueText] = useState("");
    

    
   

    // Variables for this page
    let damagedHealth: number = 0;
    const [hidden, setHidden] = useState({
        attackMenu: "",
        nextChapterMenu: "hidden"
    });




    // reuseable functions


        // randomizer

    const randomisedDamage2 = () => {
        return Math.floor(Math.random() * 3) 
    }

        // User Damage

    let damageComparisonUser = (damage: number) => {
        if (damage <= 0) {
            damagedHealth = currentMonster.health;
            console.log("you did none, or negative damage")
        }
        else if ((currentMonster.health - damage) > 0){
            damagedHealth = currentMonster.health - damage;
            console.log(currentMonster.health, "this is post damage and not dropping to 0 (physical)")
        } 
    }
        
        // Physical Damage 
        // NOTE/TODO: could potentially make these arguments of attacker and defender as reuseable code for the monster attacking back.

    const damageComparisonUserPhys = () => {
        let damage = (userStats.physAtk + randomisedDamage2()) - currentMonster.physDef;
        console.log("user attack and randomized damage", damage);
        console.log(dialogueText);

        damageComparisonUser(damage);

        if (currentMonster.health > 0){
        setDialogueText(`${userStats.userName} did ${damage} physical damage to the ${currentMonster.monsterName}!`);
        console.log(dialogueText);
        } else {
            setHidden({attackMenu: "hidden", nextChapterMenu: ""});
            setDialogueText(`${userStats.userName} destroyed a ${currentMonster.monsterName}!`);
        console.log(dialogueText);
        }

    }

        // Magic Attack

    const damageComparisonUserMag = () => {
        let damage = (userStats.magAtk + randomisedDamage2()) - currentMonster.magDef;
        console.log("user attack and randomized damage", damage);
        console.log(dialogueText);

        damageComparisonUser(damage);


        if (currentMonster.health > 0){
            setDialogueText(`${userStats.userName} did ${damage} magic damage to the ${currentMonster.monsterName}!`);
            console.log(dialogueText);
            } else {
                setHidden({attackMenu: "hidden", nextChapterMenu: ""});
                setDialogueText(`${userStats.userName} destroyed a ${currentMonster.monsterName}!`);
            console.log(dialogueText);
            }

    }
    
    // User Attacks


    const userPhysAttack = () => {

        damageComparisonUserPhys();
        
        updateCurrentMonster({
            monsterName: currentMonster.monsterName,
            health: damagedHealth,
            physAtk: currentMonster.physAtk,
            physDef: currentMonster.physDef,
            magAtk: currentMonster.magAtk,
            magDef: currentMonster.magDef,
            xp: currentMonster.xp,
            image: currentMonster.image
        })
        console.log(currentMonster);
    }

    const userMagAttack = () => {

        damageComparisonUserMag();

        updateCurrentMonster({
            monsterName: currentMonster.monsterName,
            health: damagedHealth,
            physAtk: currentMonster.physAtk,
            physDef: currentMonster.physDef,
            magAtk: currentMonster.magAtk,
            magDef: currentMonster.magDef,
            xp: currentMonster.xp,
            image: currentMonster.image
        })
        console.log(currentMonster);
    }


    // Monster attack
    

 


    return(
        <main className="FightScreenContainer">
            <section className={`UserAbilityButtons ${hidden.attackMenu}`}>
                    <AttackButton
                    attack={userPhysAttack}
                    attackType="Physical Attack"
                    />
                    <AttackButton
                    attack={userMagAttack}
                    attackType="Magic Attack"
                    />
                    <RandomMonsterButton/>
            </section>
            <section className="UserVsPlayerContainer">
                    <ActivePlayer/>
                    <ActiveMonster/>
            </section>
            <section>
                    <DialogueBox
                    dialogueText={dialogueText}
                    />
            </section>
            <section className={hidden.nextChapterMenu}>
                <Link to="/StoryScreen"><button onClick={nextChapter}>Next Chapter</button></Link>
            </section>
        </main>
    )
}

export default FightScreen;