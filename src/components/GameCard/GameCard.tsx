import React from 'react';
import { PlayerId } from '../../redux/reducers/players/types';
import { useAppSelector } from '../../redux/hooks';
import { getPlayersByID } from '../../redux/reducers/players/reducer';
import GameImages from './subComponents/GameImages';
import GameTotalTime from './subComponents/GameInfos';

interface Props {
    winnerId: PlayerId
    opponentId: PlayerId
    startTime: Date
    endTime: Date
}

const GameCard = ({ winnerId, opponentId, startTime, endTime }: Props) => {
    const players = useAppSelector((state) => getPlayersByID(state))

    return (
        <div className="flex border-b mb-2 justify-start">
            <GameImages players={[players[winnerId], players[opponentId]]} winnerId={winnerId} />
            <div className='text-left ml-20'>
                <h1 className='font-bold text-4xl'>{players[winnerId].lastname} VS {players[opponentId].lastname}</h1>
                <span className='font-extralight text-zinc-600 text-xs mb-3 inline-block'>{new Date(startTime).toDateString()}</span>
                <GameTotalTime startTime={startTime} endTime={endTime} />
            </div>
        </div>
    );
}

export default GameCard;
