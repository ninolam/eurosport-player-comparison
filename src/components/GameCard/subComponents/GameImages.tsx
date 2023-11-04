import React from 'react';
import { Player, PlayerId } from '../../../redux/reducers/players/types';

interface Props {
    players: Player[]
    winnerId: PlayerId
}

const GameImages = ({ players, winnerId }: Props) => {
    // console.log(players);
    
    return (
        <div className="flex relative">
            {players?.map(player => (
                <div key={player.id} className='relative'>
                    <img className='filter grayscale' alt='PLAYER IMG' src={player.picture.url} />
                    {player.id === winnerId && <span className='absolute bottom-0 py-1 px-1.5 bg-red-600 left-1/2 transform -translate-x-1/2 text-white font-bold'>Win</span>}
                </div>
            ))}
        </div>
    );
}

export default GameImages;
