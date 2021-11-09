import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoryChapterContext } from "../../ContextProvider/CurrentChapterProvider";
import { MonsterContext } from "../../ContextProvider/CurrentMonsterProvider";
import CharacterPortrait from "../CharacterPortrait/CharacterPortrait";
import DialogueBox from "../DialogueBox/DialogueBox";

// Images
import Informant from '../../Images/Informant.jpg';

// CSS import
import './StoryScreen.css';
import LinkButton from "../Buttons/LinkButton/LinkButton";
import { UserContext } from "../../ContextProvider/UserContextProvider";


const StoryScreen = () => {


    // Imported Contexts
    const {storyChapter, currentChapterDialogue } = useContext(StoryChapterContext);
    const {assignRandomMonster, updateCurrentMonster, allMonsters } = useContext(MonsterContext);
    const { resetHealth, userStats } = useContext(UserContext);

    // count code

    const [count, setCount] = useState(0);
    console.log("this is the count on startup", count);

    // next screen variable
    const [hidden, setHidden] = useState({
        nextButton: "",
        nextScreenLink: "hidden"
    })

    // link variable
    const [linkPath, setLinkPath] = useState("/FightScreen");

    // text variable
    const [text, setText] = useState({
        chapter: currentChapterDialogue[0],
        buttonText: "Go to Fight"
    })

    // reusable functions

    const increaseCount = () => {
        console.log("count function is running");
        console.log(count);
        let newCount = count + 1;
        console.log("temp variable newCount", newCount);
        setCount(newCount);
        console.log ("this is the count after the setCount function", count);

    }


    // On click to progress to next dialogue.
        // NOTE: this also assigns the monster to the fight screen before the user gets to it.
        // IE - on storyChapter1, it randomzies an enemy.

    const nextText = () =>{
        increaseCount();
        
        if(count < currentChapterDialogue.length) {
            setText({
                chapter:currentChapterDialogue[count],
                buttonText: text.buttonText
            });
        } else {
            setHidden({nextButton: "hidden", nextScreenLink: ""});
            setText({
                chapter: "This is the end of the dialogue, begin the fight!",
                buttonText: text.buttonText 
            });
            console.log("before health reset",userStats)
            resetHealth();
            console.log("after health reset", userStats)

            if (storyChapter == 1){
                assignRandomMonster();
            } else if (storyChapter == 2){
                updateCurrentMonster(allMonsters[2]);
            } else if (storyChapter == 3){
                updateCurrentMonster(allMonsters[3]);
            } else {
                setLinkPath("/FinalScreen");
                setText({
                    chapter: text.chapter,
                    buttonText: "Claim your reward!"
                })
            }
        }
        console.log("count after increase", count);
    }



    

    return(
        <main className="StoryScreenContainer">
            <section>Chapter: {storyChapter}</section>
                <CharacterPortrait
                image={Informant}
                />

                <DialogueBox
                dialogueText={text.chapter}
                />
            <section className={`NextButtonContainer ${hidden.nextButton}`}>
                    <button className="NextButton"onClick={nextText}>Next</button>
            </section>
            <section className={`NextButtonContainer ${hidden.nextScreenLink}`}>
                {/* <Link to={linkPath}><button className="NextButton">{text.buttonText}</button></Link> */}
                <LinkButton
                link={linkPath}
                text={text.buttonText}
                />
            </section>
        </main>
    )
}

export default StoryScreen;