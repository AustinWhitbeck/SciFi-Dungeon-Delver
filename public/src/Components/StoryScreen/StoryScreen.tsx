import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoryChapterContext } from "../../ContextProvider/CurrentChapterProvider";
import { MonsterContext } from "../../ContextProvider/CurrentMonsterProvider";
import DialogueBox from "../DialogueBox/DialogueBox";

// CSS import
import './StoryScreen.css';


const StoryScreen = () => {


    // Imported Contexts
    const {storyChapter, currentChapterDialogue } = useContext(StoryChapterContext);
    const {assignRandomMonster, updateCurrentMonster, allMonsters} = useContext(MonsterContext);

    // count code

    const [count, setCount] = useState(0);
    console.log("this is the count on startup", count);

    // next screen variable
    const [nextScreen, setNextScreen] = useState("hidden")

    // link variable
    const [linkPath, setLinkPath] = useState("/FightScreen");

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
            setText(currentChapterDialogue[count]);
        } else {
            setNextScreen("");
            setText("This is the end of the dialogue, begin the fight!");
            if (storyChapter == 1){
                assignRandomMonster();
            } else if (storyChapter == 2){
                updateCurrentMonster(allMonsters[2]);
            } else if (storyChapter == 3){
                updateCurrentMonster(allMonsters[3]);
            } else {
                setLinkPath("/FinalScreen");
            }
        }
        console.log("count after increase", count);
    }



    // text variable
    const [text, setText] = useState(currentChapterDialogue[0])

    return(
        <main className="StoryScreenContainer">
            <section>Chapter: {storyChapter}</section>
            <section>
                <DialogueBox
                dialogueText={text}
                />
            </section>
            <section>
                <button onClick={nextText}>Next</button>
                <span>{count}</span>
                <button onClick={increaseCount}>Increase count</button>
            </section>
            <section className={nextScreen}>
                <Link to={linkPath}><button>Go to fight</button></Link>
            </section>
        </main>
    )
}

export default StoryScreen;