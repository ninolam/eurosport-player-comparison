import React from 'react';
import PlayerTotalTime from './PlayerTotalTime';
import PlayerStats from './PlayerStats';

import type { Player } from '../../../redux/reducers/players/types';

interface Props {
    firstPlayer: Player
    secondPlayer: Player
}

const PlayersStatsComparison = ({ firstPlayer, secondPlayer }: Props) => {
    return (
        <div className="p-5 absolute bg-white rounded-lg w-5/6 lg:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 z-10 h-2/5 lg:h-auto overflow-auto">
            <h1 className='mb-6 font-bold text-xl lg:text-2xl'>STATISTIQUES</h1>
            <div className='flex justify-between'>
                <PlayerStats player={firstPlayer} />
                <div>
                    <p className='mb-4 font-bold'>Âge</p>
                    <p className='mb-4 font-bold'>Rank</p>
                    <p className='mb-4 font-bold'>Points</p>
                    <p className='mb-4 font-bold'>Taille</p>
                    <p className='mb-16 font-bold'>Poids</p>
                    <p className='font-bold'>Confrontations</p>
                </div>
                <PlayerStats player={secondPlayer} />
            </div>
            <PlayerTotalTime />
        </div>
    );
}

export default PlayersStatsComparison;
