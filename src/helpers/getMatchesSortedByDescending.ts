import type { Match } from "../redux/reducers/matches/types";

export const getMatchesSortedByDescending = (matches: Match[]) => {
    const copyMatches = [...matches]

    return copyMatches.sort(function (a, b) {
        const dateA = new Date(a.startTime);
        const dateB = new Date(b.startTime);
        return dateB > dateA ? 1 : -1;
    });
}