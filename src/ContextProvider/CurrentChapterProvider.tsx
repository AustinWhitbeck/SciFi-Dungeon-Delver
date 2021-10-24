import React, { ReactNode, useState, useContext } from "react";
import { UserStats } from "../Components/Model/Interfaces";



const defaultStoryChapter  = {
    storyChapter: 1,
    nextChapter: () => {},
};


export const StoryChapterContext = React.createContext(defaultStoryChapter);


export const StoryChapterContextProvider = ({children}: {children: ReactNode}) => {

    const [storyChapter, setStoryChapter] = useState<number>(1)

    const nextChapter = () => {
        setStoryChapter(storyChapter + 1);
    }


    return (
        <StoryChapterContext.Provider value={{storyChapter, nextChapter}}>
            {children}
        </StoryChapterContext.Provider>
    )

}