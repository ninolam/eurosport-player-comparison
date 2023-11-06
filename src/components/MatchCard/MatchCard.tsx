import React from 'react';

import MatchImages from './subComponents/MatchImages';
import MatchInfos from './subComponents/MatchInfos';

import type { Player } from '../../redux/reducers/players/types';
interface Props {
    winner: Player
    opponent: Player
    startTime: Date | string
    endTime: Date | string
}

const MatchCard = ({ winner, opponent, startTime, endTime }: Props) => {

    return (
        <div data-testid={winner.id} className="flex border-b mb-2 justify-start">
            <MatchImages players={[winner, opponent]} winnerId={winner.id} />
            <div className='text-left ml-8 lg:ml-20'>
                <MatchInfos
                    startTime={startTime}
                    endTime={endTime}
                    firstPlayerName={winner.lastname}
                    secondPlayerName={opponent.lastname}
                />
            </div>
        </div>
    );
}

export default MatchCard;
