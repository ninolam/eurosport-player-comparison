import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { getAllMatches } from '../../../redux/reducers/matches/selectors';
import { getTotalTimePlayed } from '../../../helpers/getTotalTimeOfMatch';

const PlayersTotalTime = () => {
    const matchs = useAppSelector((state) => getAllMatches(state))
    return (
        <div className="border-t pt-4 mt-4">
            <p className='mb-4'> Matchs jouer au total: {matchs.length}</p>
            <p className='mb-4'> Nombres d'heures total: {getTotalTimePlayed(matchs)} Heures</p>
            <p className='mb-4'> Durée moyenne d'un match: {Math.round(getTotalTimePlayed(matchs) / matchs.length)} Heures</p>
        </div>
    );
}

export default PlayersTotalTime;
