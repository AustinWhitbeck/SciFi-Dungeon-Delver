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
import { MonsterStats, UserStats } from "../Model/Interfaces";


const FightScreen = () => {

    // context providers
    const { userStats, updateUserStats } = useContext(UserContext);
    const {currentMonster, updateCurrentMonster} = useContext(MonsterContext);
    const {nextChapter, respawnChapter} = useContext(StoryChapterContext);

    // temp text for dialogue box
    const [dialogueText, setDialogueText] = useState(`${currentMonster.monsterName} Looks ready to attack!`);

    // Variables for this page
    const [hidden, setHidden] = useState({
        attackMenu: "",
        nextChapterMenu: "hidden",
        respawn: "hidden"
    });



    //// Functions  ////


        // randomizer

    const randomisedDamage2 = () => {
        return Math.floor(Math.random() * 3) 
    }


    const userPhysAttack = () => {
        // user attack first
        allAttackLogic( userStats, currentMonster, "phys");

        // monster attack second with a delay
        if(currentMonster.currentHealth <= 0){
            console.log("monster already dead");
        } else {
            setTimeout(() => 
                allAttackLogic( currentMonster, userStats, "phys"),
                1000,
                console.log("timeout worked?")
            )
        }

    }

    const userMagAttack = () => {
        // user attack first
        allAttackLogic( userStats, currentMonster, "mag");

        // monster attack second with a delay
        if(currentMonster.currentHealth <= 0){
            console.log("monster already dead");
        } else {
            setTimeout(() => 
                allAttackLogic( currentMonster, userStats, "mag"),
                1000,
                console.log("timeout worked?")
            )
        }
    }

    

    ///// ATTEMPT AT COMBINING THE FUNCTION FOR ATTACKING /////
        // attacker, defender, phys, mag,  monster and player damage

    const allAttackLogic = (attacker: UserStats | MonsterStats, defender: UserStats | MonsterStats, attackType: string) => {
        let damage = 0;
        let type = attackType;
        let damagedDefenderHealth = defender.currentHealth;

        /// determine the type of damage then compare the attacker damage type to defender damage type.
        if( type == "phys" ){
            damage = (attacker.physAtk + randomisedDamage2()) - defender.physDef;
            console.log(damage);
        } else if( type == "mag" ){
            damage = (attacker.magAtk + randomisedDamage2()) - defender.magDef;
            console.log(damage);
        }

        /// now that the damage type is determined by type and how much it is, compare it against the defender
        if (damage <= 0){
            damagedDefenderHealth = defender.currentHealth;
            console.log(`attacker did none or negative damage`);
        } else {
            damagedDefenderHealth = defender.currentHealth - damage;
            console.log(`attacker did ${damage} to defender leaving ${defender.currentHealth} left.`)
        }


        // now update the defenders health after damage

            // if Monster
        if ( attacker == userStats ){
            updateCurrentMonster({
                monsterName: currentMonster.monsterName,
                health: currentMonster.health,
                currentHealth: damagedDefenderHealth,
                physAtk: currentMonster.physAtk,
                physDef: currentMonster.physDef,
                magAtk: currentMonster.magAtk,
                magDef: currentMonster.magDef,
                xp: currentMonster.xp,
                image: currentMonster.image
            })
            console.log(currentMonster.currentHealth);
        } 
            // if User
        else if ( attacker == currentMonster ){
            updateUserStats({
                userName: userStats.userName,
                name: userStats.name,
                health: userStats.health,
                currentHealth: damagedDefenderHealth,
                physAtk: userStats.physAtk,
                physDef: userStats.physDef,
                magAtk: userStats.magAtk,
                magDef: userStats.magDef,
                exp: userStats.exp,
                image: userStats.image
            })
            console.log(userStats.currentHealth)
        }

        /// Update the text box to reflect the attacker's damage.
        if(attacker == userStats && defender == currentMonster){
            if (defender.currentHealth > 0 ){
                setDialogueText(`${userStats.userName} did ${damage} physical damage to the ${currentMonster.monsterName}!`);
                console.log(dialogueText);
                }  else {
                    setHidden({attackMenu: "hidden", nextChapterMenu: "", respawn: "hidden"});
                    setDialogueText(`${userStats.userName} destroyed a ${currentMonster.monsterName}!`);
                console.log(dialogueText);
                }
        } else if (attacker == currentMonster && defender == userStats){
            if (defender.currentHealth > 0 ){
                setDialogueText(`${currentMonster.monsterName} did ${damage} physical damage to the ${userStats.userName}!`);
                console.log(dialogueText);
                } else if (defender.currentHealth <= 0){
                    setHidden({attackMenu: "hidden", nextChapterMenu: "hidden", respawn: ""})
                    setDialogueText(`Our hero ${userStats.userName} has been felled by ${currentMonster.monsterName}! A tragedy.`);
                }
        }

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
            <section className={hidden.respawn}>
                <LinkButton
                link="/StoryScreen"
                onClick={ respawnChapter }
                text="Respawn"
                />
            </section>
        </main>
    )
    
}

export default FightScreen;