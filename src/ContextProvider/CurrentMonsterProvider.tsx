import React, { ReactNode, useState, useContext } from "react";
import { UserStats } from "../Components/Model/Interfaces";


interface MonsterContext  {
    userStats: MonsterStats,
    updateUserStats: (stats: UserStats) => void,
    updateUserName: (newName: string) => void,
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
        exp: 0
    },
    updateUserStats: (stats: UserStats) => {},
    updateUserName: (newName: string) => {}
}


export const UserContext = React.createContext(defaultUserValue);


export const MonsterContextProvider = ({children}: {children: ReactNode}) => {

    const [userStats, setUserStats] = useState<UserStats>({
        userName: "user name",
        name: "none",
        health: 0,
        physAtk: 0,
        physDef: 0,
        magAtk: 0,
        magDef: 0,
        exp: 0
    })

    const updateUserStats = (stats: UserStats) => {
        setUserStats({
            userName: userStats.userName,
            name: stats.name,
            health: stats.health,
            physAtk: stats.physAtk,
            physDef: stats.physDef,
            magAtk: stats.magAtk,
            magDef: stats.magDef,
            exp: userStats.exp
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
            exp: userStats.exp
        })
    }

    return (
        <UserContext.Provider value={{userStats, updateUserStats, updateUserName}}>
            {children}
        </UserContext.Provider>
    )

}