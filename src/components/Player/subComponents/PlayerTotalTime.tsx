import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { getAllMatchesIds, getAllMatchesByID } from '../../../redux/reducers/matches/reducer';

const PlayersTotalTime = () => {
    const matchesId = useAppSelector((state) => getAllMatchesIds(state))
    const match = useAppSelector((state) => getAllMatchesByID(state))

    const getTotalTimePlayed = () => {
        let totalTime = 0
        matchesId.forEach(id => {
            const { startTime, endTime } = match[id]
            const timePlayed = (new Date(endTime).getHours() - new Date(startTime).getHours())
            totalTime += timePlayed
            // console.log(timePlayed);
        });

        return totalTime;
    }

    return (
        <div className="PlayersTotalTime">
            <p className='mb-4'> Total de match jouer: {matchesId.length}</p>
            <p className='mb-4'> Temps jouer total: {getTotalTimePlayed()} Heures</p>
            <p className='mb-4'> Durée moyenne d'un match: {Math.round(getTotalTimePlayed() / matchesId.length)} Heures</p>
        </div>
    );
}

export default PlayersTotalTime;
