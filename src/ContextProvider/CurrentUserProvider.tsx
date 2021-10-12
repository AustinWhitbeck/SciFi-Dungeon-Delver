import { createContext, ReactNode, useState} from "react";
import { CharacterClass, UserProfile, UserStats } from "../Components/Model/Interfaces";


let defaultCurrentUser: UserProfile = 
    {
        CurrentUserProfile: {
        userName: "",
        name: "",
        physAtk: 0,
        physDef: 0,
        magAtk: 0,
        magDef: 0,
        exp: 0
        },
        updateCurrentUser: (userStats) => {}
    }

export const CurrentUserContext = createContext<UserProfile>(defaultCurrentUser);

export const CurrentUserProvider = ({children}: {children: ReactNode}) => {

    const [CurrentUserProfile, setCurrentUserProfile] = useState({
        userName: "",
        name: "",
        physAtk: 0,
        physDef: 0,
        magAtk: 0,
        magDef: 0,
        exp: 0
    })

    const updateCurrentUser = (userStats: UserStats) => {
        setCurrentUserProfile(userStats);
    }

    return (<CurrentUserContext.Provider value={ {CurrentUserProfile, updateCurrentUser} }>
        {children}
    </CurrentUserContext.Provider>)
}

