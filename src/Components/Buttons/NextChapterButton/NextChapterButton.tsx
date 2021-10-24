import { useContext } from "react";
import { StoryChapterContext } from "../../../ContextProvider/CurrentChapterProvider";


const NextChapterButton = () => {

    const {storyChapter} = useContext(StoryChapterContext);
    
    return(
        <main>
            <button> Proceed to Chapter {storyChapter}</button>
        </main>
    )
}

export default NextChapterButton;