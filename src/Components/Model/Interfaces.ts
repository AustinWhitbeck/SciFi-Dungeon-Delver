

export interface CharacterClass {
        index: number,
        name: string,
        health: number,
        physAtk: number,
        physDef: number,
        magAtk: number,
        magDef: number
}

export interface UserStats {
        userName?: string | undefined,
        name?: string,
        health: number,
        physAtk: number,
        physDef: number,
        magAtk: number,
        magDef: number
        exp?: number
}
export interface UserProfile {
        CurrentUserProfile: UserStats,
        updateCurrentUser: (stats: UserStats) => void
}