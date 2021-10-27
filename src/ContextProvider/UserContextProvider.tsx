import React, { ReactNode, useState, useContext } from "react";
import { CharacterClass, UserStats } from "../Components/Model/Interfaces";


// Character Class Images
import StreetBrawler from '../Images/StreetBrawler.jpg';
import CyberNinja from '../Images/CyberNinja.jpg';
import MysticSword from '../Images/MysticSword.jpg';


interface UserContext  {
    userStats: UserStats,
    updateUserStats: (stats: UserStats) => void,
    updateUserName: (newName: string) => void,
    classList: CharacterClass[]
}

const defaultUserValue: UserContext = {
    userStats: {
        userName: "default name",
        name: "none",
        health: 0,
        physAtk: 0,
        physDef: 0,
        magAtk: 0,
        magDef: 0,
        exp: 0,
        image: ""
    },
    updateUserStats: (stats: UserStats) => {},
    updateUserName: (newName: string) => {},
    classList: []

}


export const UserContext = React.createContext(defaultUserValue);


export const UserContextProvider = ({children}: {children: ReactNode}) => {

    const [userStats, setUserStats] = useState<UserStats>({
        userName: "",
        name: "",
        health: 0,
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
            health: 14,
            physAtk: 5,
            physDef: 2,
            magAtk: 0,
            magDef: 1,
            image: StreetBrawler
        },
        {
            index: 2,
            name: "Cyber Ninja",
            health: 8,
            physAtk: 4,
            physDef: 1,
            magAtk: 1,
            magDef: 2,
            image: CyberNinja
        },
        {
            index: 3,
            name: "Mystic Sword",
            health: 10,
            physAtk: 2,
            physDef: 1,
            magAtk: 3,
            magDef: 2,
            image: MysticSword
        },

    ]

    const updateUserStats = (stats: UserStats) => {
        setUserStats({
            userName: userStats.userName,
            name: stats.name,
            health: stats.health,
            physAtk: stats.physAtk,
            physDef: stats.physDef,
            magAtk: stats.magAtk,
            magDef: stats.magDef,
            exp: userStats.exp,
            image: stats.image
        });
    }

    const updateUserName = (newName: string) => {
        setUserStats({
            userName: newName,
            name: userStats.name,
            health: userStats.health,
            physAtk: userStats.physAtk,
            physDef: userStats.physDef,
            magAtk: userStats.magAtk,
            magDef: userStats.magDef,
            exp: userStats.exp,
            image: userStats.image
        })
    }

    return (
        <UserContext.Provider value={{userStats, updateUserStats, updateUserName, classList}}>
            {children}
        </UserContext.Provider>
    )

}