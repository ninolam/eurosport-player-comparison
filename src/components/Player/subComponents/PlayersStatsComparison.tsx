import React from 'react';
import { PlayerId } from '../../../redux/reducers/players/types';
import PlayerTotalTime from './PlayerTotalTime';
import PlayerStats from './PlayerStats';

interface Props {
    firstId: PlayerId
    secondId: PlayerId
}

const PlayersStatsComparison = ({ firstId, secondId }: Props) => {

    return (
        <div className={`p-5 absolute bg-white rounded-lg w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10`}>
            <h1 className='mb-6 font-bold text-2xl'>STATISTIQUES</h1>
            <div className='flex justify-between'>
                <PlayerStats id={firstId} />
                <div>
                    <p className='mb-4 font-bold'>Rank</p>
                    <p className='mb-4 font-bold'>Points</p>
                    <p className='mb-4 font-bold'>Taille</p>
                    <p className='mb-8 font-bold'>Poids</p>
                    <p className='font-bold'>Confrontations</p>
                </div>
                <PlayerStats id={secondId} />

            </div>
            <PlayerTotalTime />
        </div>
    );
}

export default PlayersStatsComparison;
