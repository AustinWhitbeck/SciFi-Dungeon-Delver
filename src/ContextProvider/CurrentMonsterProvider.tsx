import React, { ReactNode, useState, useContext } from "react";
import { MonsterStats, UserStats } from "../Components/Model/Interfaces";


interface MonsterContext  {
    currentMonster: MonsterStats,
    allMonsters: MonsterStats[],
    updateCurrentMonster: (stats: MonsterStats) => void,
    assignRandomMonster: () => void
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
    allMonsters: [

    ],
    updateCurrentMonster: (stats: MonsterStats) => {},
    assignRandomMonster: () => {}
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

    const allMonsters: MonsterStats[] = [
        {
            monsterName: "Space Goblin",
            health: 20,
            physAtk: 2,
            physDef: 1,
            magAtk: 1,
            magDef: 0,
            xp: 5
        },
        {
            monsterName: "Void Appartion",
            health: 25,
            physAtk: 2,
            physDef: 2,
            magAtk: 2,
            magDef: 1,
            xp: 5
        }
    ]


    const assignRandomMonster = () => {
        let randomizedMonster = allMonsters[Math.floor(Math.random() * 2)];
        console.log(randomizedMonster);
        console.log(allMonsters);
        updateCurrentMonster(randomizedMonster);

        
    }


    return (
        <MonsterContext.Provider value={{currentMonster, allMonsters, assignRandomMonster, updateCurrentMonster}}>
            {children}
        </MonsterContext.Provider>
    )

}