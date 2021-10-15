import { createContext, ReactNode, useState} from "react";
import { CharacterClass } from "../Components/Model/Interfaces";



interface MonstersContext  {
    userStats: UserStats,
    updateUserStats: (stats: UserStats) => void,
    updateUserName: (newName: string) => void,
}


let defaultMonster: MonsterClass[] = [
    {
        index: 0,
        name: "fighter",
        health: 12,
        physAtk: 2,
        physDef: 2,
        magAtk: 0,
        magDef: 1
    }
]

export const ClassListContext = createContext(defaultClasses);

export const ClassListProvider = ({children}: {children: ReactNode}) => {

    const [ClassList, setClassList] = useState({})
}

