import React from 'react';

import GameImages from './subComponents/GameImages';
import GameInfos from './subComponents/GameInfos';

import type { Player } from '../../redux/reducers/players/types';
interface Props {
    winner: Player
    opponent: Player
    startTime: Date
    endTime: Date
}

const GameCard = ({ winner, opponent, startTime, endTime }: Props) => {

    return (
        <div className="flex border-b mb-2 justify-start">
            <GameImages players={[winner, opponent]} winnerId={winner.id} />
            <div className='text-left ml-8 lg:ml-20'>
                <GameInfos
                    startTime={startTime}
                    endTime={endTime}
                    firstPlayerName={winner.lastname}
                    secondPlayerName={opponent.lastname}
                />
            </div>
        </div>
    );
}

export default GameCard;
