import React, { ReactNode, useState, useContext } from "react";
import { MonsterStats, UserStats } from "../Components/Model/Interfaces";


interface MonsterContext  {
    currentMonster: MonsterStats,
    updateCurrentMonster: (stats: MonsterStats) => void,
}

const defaultUserValue: MonsterContext = {
    currentMonster: {
        monsterName: "none",
        health: 0,
        physAtk: 0,
        physDef: 0,
        magAtk: 0,
        magDef: 0,
        xp: 0
    },
    updateCurrentMonster: (stats: MonsterStats) => {},
}


export const MonsterContext = React.createContext(defaultUserValue);


export const MonsterContextProvider = ({children}: {children: ReactNode}) => {

    const [currentMonster, setCurrentMonster] = useState<MonsterStats>({
        monsterName: "none",
        health: 0,
        physAtk: 0,
        physDef: 0,
        magAtk: 0,
        magDef: 0,
        xp: 0
    })

    const updateCurrentMonster = (stats: MonsterStats) => {
        setCurrentMonster({
            monsterName: stats.monsterName,
            health: stats.health,
            physAtk: stats.physAtk,
            physDef: stats.physDef,
            magAtk: stats.magAtk,
            magDef: stats.magDef,
            xp: stats.xp
        });
    }


    return (
        <MonsterContext.Provider value={{currentMonster, updateCurrentMonster}}>
            {children}
        </MonsterContext.Provider>
    )

}