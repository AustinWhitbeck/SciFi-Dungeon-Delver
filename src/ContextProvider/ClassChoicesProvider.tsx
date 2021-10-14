import { createContext, ReactNode, useState} from "react";
import { CharacterClass } from "../Components/Model/Interfaces";


let defaultClasses: CharacterClass[] = [
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