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
import LinkButton from "../Buttons/LinkButton/LinkButton";


const FightScreen = () => {

    // context providers
    const { userStats, updateUserStats } = useContext(UserContext);
    const {currentMonster, updateCurrentMonster} = useContext(MonsterContext);
    const {nextChapter} = useContext(StoryChapterContext);

    // temp text for dialogue box
    const [dialogueText, setDialogueText] = useState(`${currentMonster.monsterName} Looks ready to attack!`);
    

    
   

    // Variables for this page
    let userDamagedHealth: number = 0;
    let monsterDamagedHealth: number = 0;
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
            monsterDamagedHealth = currentMonster.currentHealth;
            console.log("you did none, or negative damage")
        }
        else if ((currentMonster.currentHealth - damage) > 0){
            monsterDamagedHealth = currentMonster.currentHealth - damage;
            console.log(currentMonster.currentHealth, "this is post damage and not dropping to 0 (physical)")
        } 
    }

        // Monster Damage ( this can be combined but for current purposes, doing it this way. Combined with user)
    
    let damageComparisonMonster = (damage: number) => {
        if (damage <= 0) {
            userDamagedHealth = userStats.currentHealth;
            console.log("you did none, or negative damage")
        }
        else if ((userStats.currentHealth - damage) > 0){
            userDamagedHealth = userStats.currentHealth - damage;
            console.log(userStats.currentHealth, "this is post damage and not dropping to 0 (physical)")
        } 
    }
        // Physical Damage 
        // NOTE/TODO: could potentially make these arguments of attacker and defender as reuseable code for the monster attacking back.

    const damageComparisonUserPhys = () => {
            let damage = (userStats.physAtk + randomisedDamage2()) - currentMonster.physDef;
            console.log("user attack and randomized damage", damage);
            console.log(dialogueText);
            let monsterDamage = (currentMonster.physAtk + randomisedDamage2()) - userStats.physDef;

            damageComparisonUser(damage);
            damageComparisonMonster(monsterDamage);

        if (currentMonster.currentHealth > 0 && userStats.currentHealth > 0){
        setDialogueText(`${userStats.userName} did ${damage} physical damage to the ${currentMonster.monsterName} and 
                        ${currentMonster.monsterName} attacked back for ${monsterDamage}!`);
        console.log(dialogueText);
        } else if (userStats.currentHealth == 0){
            setDialogueText(`${currentMonster.monsterName} has slain ${userStats.userName}.`);
            setHidden({attackMenu: "hidden", nextChapterMenu: hidden.nextChapterMenu});
        } else {
            setHidden({attackMenu: "hidden", nextChapterMenu: ""});
            setDialogueText(`${userStats.userName} destroyed a ${currentMonster.monsterName}!`);
        console.log(dialogueText);
        }


    //     damageComparisonMonster(monsterDamage);
    // // user portion of attack
    //     damageComparisonUser(damage);

    //     if (currentMonster.currentHealth > 0){
    //     setDialogueText(`${userStats.userName} did ${damage} physical damage to the ${currentMonster.monsterName}!`);
    //     console.log(dialogueText);
    //     } else if (userStats.currentHealth == 0){
    //         null
    //     } else {
    //         setHidden({attackMenu: "hidden", nextChapterMenu: ""});
    //         setDialogueText(`${userStats.userName} destroyed a ${currentMonster.monsterName}!`);
    //     console.log(dialogueText);
    //     }
    

    // // monster portion of attack
    //     setTimeout(() => )
    }

        // Magic Attack
    const damageComparisonUserMag = () => {
        let damage = (userStats.magAtk + randomisedDamage2()) - currentMonster.magDef;
        console.log("user attack and randomized damage", damage);
        console.log(dialogueText);
        

        damageComparisonUser(damage);
        


        if (currentMonster.currentHealth > 0){
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
            health: currentMonster.health,
            currentHealth: monsterDamagedHealth,
            physAtk: currentMonster.physAtk,
            physDef: currentMonster.physDef,
            magAtk: currentMonster.magAtk,
            magDef: currentMonster.magDef,
            xp: currentMonster.xp,
            image: currentMonster.image
        })
        console.log(currentMonster);
        /// setTimeout delays the function happening. This breaks up the attack from the NPC till a bit after ///
        setTimeout(() =>
            updateUserStats({
                userName: userStats.userName,
                name: userStats.name,
                health: userStats.health,
                currentHealth: userDamagedHealth,
                physAtk: userStats.physAtk,
                physDef: userStats.physDef,
                magAtk: userStats.magAtk,
                magDef: userStats.magDef,
                exp: userStats.exp,
                image: userStats.image
            }), 500, console.log("the timeout worked?")
        )
    }

    const userMagAttack = () => {

        damageComparisonUserMag();

        updateCurrentMonster({
            monsterName: currentMonster.monsterName,
            health: currentMonster.health,
            currentHealth: monsterDamagedHealth,
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

    const damageComparisonMonsterPhys = () => {

    }
    

 


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
                    {/* <RandomMonsterButton/> */}
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
                {/* <Link to="/StoryScreen"><button className="" onClick={nextChapter}>Next Chapter</button></Link> */}
                <LinkButton
                link="/StoryScreen"
                onClick={nextChapter}
                text="Next Chapter"
                />
            </section>
        </main>
    )
    
}

export default FightScreen;