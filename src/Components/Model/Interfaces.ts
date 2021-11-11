// Player interfaces

export interface CharacterClass {
        index: number,
        name: string,
        health: number,
        currentHealth: number,
        physAtk: number,
        physDef: number,
        magAtk: number,
        magDef: number,
        image: string
}

export interface UserStats {
        userName?: string | undefined,
        name?: string | undefined,
        health: number | undefined,
        currentHealth: number | undefined,
        physAtk: number | undefined,
        physDef: number | undefined,
        magAtk: number | undefined,
        magDef: number | undefined,
        exp?: number,
        image: string | undefined
}


export interface UserProfile {
        CurrentUserProfile: UserStats,
        updateCurrentUser: (stats: UserStats) => void
}

// Monster interfaces

export interface MonsterStats {
        monsterName?: string,
        health: number,
        currentHealth: number,
        physAtk: number,
        physDef: number,
        magAtk: number,
        magDef: number
        xp: number,
        image: string
}



