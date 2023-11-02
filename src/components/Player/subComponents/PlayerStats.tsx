import React, { useMemo } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { useAppSelector } from '../../../redux/hooks';
import { getAllMatchesIds, getAllMatchesByID } from '../../../redux/reducers/matches/reducer';
import { getPlayersByID } from '../../../redux/reducers/players/reducer';
import { PlayerId } from '../../../redux/reducers/players/types';

interface Props {
    id: PlayerId
}

const PlayerStats = ({ id }: Props) => {
    const matches = useAppSelector((state) => getAllMatchesIds(state))
    const matchesById = useAppSelector((state) => getAllMatchesByID(state))
    const player = useAppSelector((state) => getPlayersByID(state))
    const winningMatches =  matches.filter(match => matchesById[match].winner.id === id)
    const { rank, weight, height, points } = player[id].stats

    return (
        <div>
            <p className='mb-4'>{rank}</p>
            <p className='mb-4'>{points}</p>
            <p className='mb-4'>{height / 100} m</p>
            <p className='mb-4'>{weight / 1000} Kg</p>

            <div className='w-20'>
                <CircularProgressbar
                    value={winningMatches.length}
                    text={`${winningMatches.length}% Win`}
                    styles={buildStyles({
                        textColor: "black",
                        pathColor: "green",
                        trailColor: "white"
                    })}
                    strokeWidth={3}
                />
            </div>
        </div>
    );
}

export default PlayerStats;
