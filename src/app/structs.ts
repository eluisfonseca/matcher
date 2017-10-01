export interface Player {
    id: string;
    firstName: string;
    lastName: string;
    stats: PlayerStats;
}

export interface PlayerStats {
    pass: number;
    marking: number;
    handling: number;
    shot: number;
    speed: number;
    endurance: number;
    strength: number;
    vision: number;
    goalkeeping: number;
    tackle: number;
    focus: number;
}

export interface AgregatedStats {
    defence: number;
    offense: number;
    goalkeeping: number;
    skill: number;
    physique: number;
    mental: number;
}
