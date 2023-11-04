import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { getAllMatchesIds, getAllMatchesByID } from '../../../redux/reducers/matches/selectors';

const PlayersTotalTime = () => {
    const matchesId = useAppSelector((state) => getAllMatchesIds(state))
    const match = useAppSelector((state) => getAllMatchesByID(state))

    const getTotalTimePlayed = () => {
        let totalTime = 0
        matchesId.forEach(id => {
            const { startTime, endTime } = match[id]
            const timePlayed = (new Date(endTime).getHours() - new Date(startTime).getHours())
            totalTime += timePlayed
        });

        return totalTime;
    }

    return (
        <div className="border-t pt-4 mt-4">
            <p className='mb-4'> Matchs jouer au total: {matchesId.length}</p>
            <p className='mb-4'> Nombres d'heures total: {getTotalTimePlayed()} Heures</p>
            <p className='mb-4'> Durée moyenne d'un match: {Math.round(getTotalTimePlayed() / matchesId.length)} Heures</p>
        </div>
    );
}

export default PlayersTotalTime;
