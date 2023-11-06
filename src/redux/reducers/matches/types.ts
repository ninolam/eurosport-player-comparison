
export type MatchId = string

export type Match = {
    id: MatchId
    startTime: Date | string
    winner: {
        id: string
    }
    endTime: Date | string
}