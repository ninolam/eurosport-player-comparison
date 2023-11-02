
export type MatchId = string

export type Match = {
    id: MatchId
    startTime: Date
    winner: {
        id: string
    }
    endTime: Date
}