import React, { ReactNode, useState, useContext } from "react";
import { UserStats } from "../Components/Model/Interfaces";



const defaultStoryChapter  = {
    storyChapter: 1,
    currentChapterDialogue: [
        "Hello, I am the NPC who is giving you a quest Number 1",
        "This is what I want you to do. Number 2",
        "this is test 3",
        "this is test 4",
        "First, prove to me that you are combat efficient, what monster shall we have you fight first hm? Show me your skill! Number 5"
        ],
    allChapterDialogues: [
        [
            "Hello, I am the NPC who is giving you a quest Number 1",
            "This is what I want you to do. Number 2",
            "this is test 3",
            "this is test 4",
            "First, prove to me that you are combat efficient, what monster shall we have you fight first hm? Show me your skill! Number 5"
    ],
    [
        "Congratulations on passing the test, you did well",
        "For the next mission...",
        "You arrie at your destination and the Guard asks you for your ID",
        "You're unable to provide one and they know you shouldn't be here, they attack!"
    ]
    ],
    nextChapter: () => {},
};


export const StoryChapterContext = React.createContext(defaultStoryChapter);


export const StoryChapterContextProvider = ({children}: {children: ReactNode}) => {

    const [storyChapter, setStoryChapter] = useState(1);
    const [currentChapterDialogue, setCurrentChapterDialogue] = useState([
        "Hello, I am the NPC who is giving you a quest Number 1",
        "This is what I want you to do. Number 2",
        "this is test 3",
        "this is test 4",
        "First, prove to me that you are combat efficient, what monster shall we have you fight first hm? Show me your skill! Number 5"
    ]);

    const allChapterDialogues = [
        [
                "Hello, I am the NPC who is giving you a quest Number 1",
                "This is what I want you to do. Number 2",
                "this is test 3",
                "this is test 4",
                "First, prove to me that you are combat efficient, what monster shall we have you fight first hm? Show me your skill! Number 5"
        ],
        [
            "Congratulations on passing the test, you did well",
            "For the next mission...",
            "You arrive at your destination and the Guard asks you for your ID",
            "You're unable to provide one and they know you shouldn't be here, they attack!"
        ],
        [
            `I'm surprised you made it this far. You have shown cunning that `,
            "yep",
            "Alright let's fight!"
        ],
        [
            "You've defeated the big bad evil person, nice job! For that I give you the monies."
        ]
    ]

    const nextChapter = () => {
        let newChapter = storyChapter + 1;
        let nextDialogueNumber = newChapter - 1;
        let newDialogue = allChapterDialogues[nextDialogueNumber];
        setStoryChapter(newChapter);
        setCurrentChapterDialogue(newDialogue);
    }




    return (
        <StoryChapterContext.Provider value={{storyChapter, currentChapterDialogue, allChapterDialogues, nextChapter}}>
            {children}
        </StoryChapterContext.Provider>
    )

}