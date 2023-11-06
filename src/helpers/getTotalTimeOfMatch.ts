import type { Match } from "../redux/reducers/matches/types";

export const getTotalTimePlayed = (matchs: Match[]) => {
    let totalTime = 0
    matchs.forEach(match => {
        const { startTime, endTime } = match
        const timePlayed = (new Date(endTime).getHours() - new Date(startTime).getHours())
        totalTime += timePlayed
    });

    return totalTime;
}