import { useContext, useState } from "react";
import { StoryChapterContext } from "../../ContextProvider/CurrentChapterProvider";
import DialogueBox from "../DialogueBox/DialogueBox";


const StoryScreen = () => {


    // Imported Contexts
    const {storyChapter} = useContext(StoryChapterContext);

    // On click to progress to next dialogue
    let currentDialogueQue = 0;

    const nextText = () =>{
        console.log(currentDialogueQue);
        currentDialogueQue ++;
        if (currentDialogueQue < chapterOneDialogues.length){
        setText(chapterOneDialogues[currentDialogueQue]);
        } else {
            setText("This is the end of the dialogue");
        }
        // text = newText;
        console.log(currentDialogueQue);
    }

    // Chapter 1 dialogue

    const chapterOneDialogues = [
        "sample 1",
        "some other text 2",
        "a third text 3"
    ]

    // text variable
    const [text, setText] = useState(chapterOneDialogues[0])

    return(
        <main>
            <section>Chapter: {storyChapter}</section>
            <section>
                <DialogueBox
                dialogueText={text}
                />
            </section>
            <section>
                <button onClick={nextText}>Next</button>
            </section>
        </main>
    )
}

export default StoryScreen;