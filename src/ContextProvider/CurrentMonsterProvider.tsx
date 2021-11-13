import React, { ReactNode, useState} from "react";
import { MonsterStats} from "../Components/Model/Interfaces";

// monster images
import SpaceGoblin from '../Images/SpaceGoblin.jpg';
import VoidAppartion from '../Images/VoidAppartion.jpg';
import RobotSecurity from '../Images/RobotSecurity.jpg';
import FinalBoss from '../Images/FinalBoss.jpg';


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
        xp: 0,
        image: ""
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
        xp: 0,
        image: ""
    })

    const updateCurrentMonster = (stats: MonsterStats) => {
        setCurrentMonster({
            monsterName: stats.monsterName,
            health: stats.health,
            physAtk: stats.physAtk,
            physDef: stats.physDef,
            magAtk: stats.magAtk,
            magDef: stats.magDef,
            xp: stats.xp,
            image: stats.image
        });
    }

    const allMonsters: MonsterStats[] = [
        {
            monsterName: "A Wild Space Goblin",
            health: 20,
            physAtk: 2,
            physDef: 1,
            magAtk: 1,
            magDef: 0,
            xp: 5,
            image: SpaceGoblin
        },
        {
            monsterName: "A Wild Void Appartion",
            health: 25,
            physAtk: 2,
            physDef: 2,
            magAtk: 2,
            magDef: 1,
            xp: 5,
            image: VoidAppartion
        },
        {
            monsterName: "Bad Guy Security",
            health: 30,
            physAtk: 3,
            physDef: 2,
            magAtk: 3,
            magDef: 2,
            xp: 10,
            image: RobotSecurity
        },
        {
            monsterName: "Final Boss",
            health: 35,
            physAtk: 4,
            physDef: 2,
            magAtk: 4,
            magDef: 2,
            xp: 10,
            image: FinalBoss
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