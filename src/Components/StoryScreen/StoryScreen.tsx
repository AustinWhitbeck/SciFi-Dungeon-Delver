import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoryChapterContext } from "../../ContextProvider/CurrentChapterProvider";
import { MonsterContext } from "../../ContextProvider/CurrentMonsterProvider";
import DialogueBox from "../DialogueBox/DialogueBox";

// CSS import
import './StoryScreen.css';


const StoryScreen = () => {


    // Imported Contexts
    const {storyChapter} = useContext(StoryChapterContext);
    const {currentMonster, updateCurrentMonster, assignRandomMonster} = useContext(MonsterContext);

    // count code

    const [count, setCount] = useState(0);
    console.log("this is the count on startup", count);

    // next screen variable

    let nextScreen = "hidden";

    // Chapter 1 dialogue

    const chapterOneDialogues = [
        "Hello, I am the NPC who is giving you a quest Number 1",
        "This is what I want you to do. Number 2",
        "this is test 3",
        "this is test 4",
        "First, prove to me that you are combat efficient, what monster shall we have you fight first hm? Show me your skill! Number 5"
    ]
    console.log("length of the chapter dialogues array", chapterOneDialogues.length)



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
        if(count > chapterOneDialogues.length) {
            nextScreen = "";
            setText("This is the end of the dialogue, begin the fight!");
            if (storyChapter == 1){
                assignRandomMonster();
            }
        } else {
        setText(chapterOneDialogues[count]);
        }
        console.log("count after increase", count);
    }


    // text variable
    const [text, setText] = useState(chapterOneDialogues[0])

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
                <Link to="/FightScreen"><button>Go to fight</button></Link>
        </main>
    )
}

export default StoryScreen;