import React from 'react';

interface Props {
    startTime: Date
    endTime: Date
}

const GameTotalTime = ({ startTime, endTime }: Props) => {
    const timePlayed = (new Date(endTime).getHours() - new Date(startTime).getHours())

    return (
        <div className="block pt-3 border-t">
            <p className='font-extralight text-zinc-600 text-xs'>Temps</p>
            {timePlayed} H
        </div>
    );
}

export default GameTotalTime;
