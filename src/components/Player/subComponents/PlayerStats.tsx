import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { useAppSelector } from '../../../redux/hooks';
import { getAllMatches } from '../../../redux/reducers/matches/selectors';

import type { Player } from '../../../redux/reducers/players/types';

interface Props {
    player: Player
}

const PlayerStats = ({ player }: Props) => {
    const matches = useAppSelector((state) => getAllMatches(state))
    const winningMatches = matches.filter(match => match.winner.id === player.id)
    const { age, rank, weight, height, points } = player?.stats || {}

    return (
        <div>
            <p className='mb-4'>{age}</p>
            <p className='mb-4'>{rank}</p>
            <p className='mb-4'>{points}</p>
            <p className='mb-4'>{height / 100} m</p>
            <p className='mb-8'>{weight / 1000} Kg</p>
            <p className='mb-4'>{winningMatches.length}W - {matches.length - winningMatches.length}L</p>

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
