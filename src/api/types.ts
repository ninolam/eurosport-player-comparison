import type { Match } from "../redux/reducers/matches/types"
import type { Player } from "../redux/reducers/players/types"

export interface Stats {
    players: Player[]
    matches: Match[]
}

export interface DataType {
    data: {
        players: Player[]
        matches: Match[]    
    }
}