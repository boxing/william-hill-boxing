export interface Odds {
    name: string | null;
    odds: number[]; // fractional as that's always how WilliamHill has it
}

export interface OddsObj {
    firstBoxer: Odds;
    draw: Odds;
    secondBoxer: Odds;
}

export interface WilliamHillBoxingOddsInterface {
    name: string;
    odds: OddsObj;
    startTime: string;
    secondsToStart: number;
}
