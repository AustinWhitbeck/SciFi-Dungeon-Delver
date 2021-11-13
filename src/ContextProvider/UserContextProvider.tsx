import React, { ReactNode, useState } from "react";
import { CharacterClass, UserStats } from "../Components/Model/Interfaces";


// Character Class Images
import StreetBrawler from '../Images/StreetBrawler.jpg';
import CyberNinja from '../Images/CyberNinja.jpg';
import MysticSword from '../Images/MysticSword.jpg';




interface UserContext  {
    userStats: UserStats,
    updateUserStats: (stats: UserStats) => void,
    updateUserName: (newName: string) => void,
    resetHealth: () => void,
    classList: CharacterClass[]
}

const defaultUserValue: UserContext = {
    userStats: {
        userName: "default name",
        name: "none",
        health: 0,
        currentHealth: 0,
        physAtk: 0,
        physDef: 0,
        magAtk: 0,
        magDef: 0,
        exp: 0,
        image: ""
    },
    updateUserStats: (stats: UserStats) => {},
    updateUserName: (newName: string) => {},
    resetHealth: () => {},
    classList: []

}


export const UserContext = React.createContext(defaultUserValue);


export const UserContextProvider = ({children}: {children: ReactNode}) => {

    const [userStats, setUserStats] = useState<UserStats>({
        userName: "",
        name: "",
        health: 0,
        currentHealth: 0,
        physAtk: 0,
        physDef: 0,
        magAtk: 0,
        magDef: 0,
        exp: 0,
        image: ""
    })


    const classList: CharacterClass[] = [
        {
            index: 1,
            name: "Street Brawler",
            health: 25,
            currentHealth: 25,
            physAtk: 5,
            physDef: 2,
            magAtk: 0,
            magDef: 1,
            image: StreetBrawler
        },
        {
            index: 2,
            name: "Cyber Ninja",
            health: 18,
            currentHealth: 18,
            physAtk: 4,
            physDef: 1,
            magAtk: 1,
            magDef: 2,
            image: CyberNinja
        },
        {
            index: 3,
            name: "Mystic Sword",
            health: 20,
            currentHealth: 20,
            physAtk: 2,
            physDef: 1,
            magAtk: 3,
            magDef: 2,
            image: MysticSword
        },

    ]

    const resetHealth = () => {
            setUserStats({
                userName: userStats.userName,
                name: userStats.name,
                health: userStats.health,
                currentHealth: userStats.health,
                physAtk: userStats.physAtk,
                physDef: userStats.physDef,
                magAtk: userStats.magAtk,
                magDef: userStats.magDef,
                exp: userStats.exp,
                image: userStats.image
            });
        
    }

    const updateUserStats = (stats: UserStats) => {
        if(userStats){
            setUserStats({
                userName: userStats.userName,
                name: stats.name,
                health: stats.health,
                currentHealth: stats.currentHealth,
                physAtk: stats.physAtk,
                physDef: stats.physDef,
                magAtk: stats.magAtk,
                magDef: stats.magDef,
                exp: userStats.exp,
                image: stats.image
            });
        }
    }

    const updateUserName = (newName: string) => {
        if(userStats){
            setUserStats({
                userName: newName,
                name: userStats.name,
                health: userStats.health,
                currentHealth: userStats.currentHealth,
                physAtk: userStats.physAtk,
                physDef: userStats.physDef,
                magAtk: userStats.magAtk,
                magDef: userStats.magDef,
                exp: userStats.exp,
                image: userStats.image
            })
        }
    }

    return (
        <UserContext.Provider value={{userStats, updateUserStats, updateUserName, resetHealth, classList}}>
            {children}
        </UserContext.Provider>
    )

}