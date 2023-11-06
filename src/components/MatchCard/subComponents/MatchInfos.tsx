import React from 'react';

interface Props {
    startTime: Date | string
    endTime: Date | string
    firstPlayerName: string
    secondPlayerName: string
}

const MatchInfos = ({ startTime, endTime, firstPlayerName, secondPlayerName }: Props) => {
    const timePlayed = (new Date(endTime).getHours() - new Date(startTime).getHours())

    return (
        <>
            <h1 className='font-bold text-base lg:text-4xl'>{firstPlayerName} VS {secondPlayerName}</h1>
            <span className='font-extralight text-zinc-600 text-xs mb-1 lg:mb-3 inline-block'>{new Date(startTime).toDateString()}</span>
            <div className="block pt-1 lg:pt-3 border-t">
                <p className='font-extralight text-zinc-600 text-xs'>Temps</p>
                {timePlayed} H
            </div>

        </>
    );
}

export default MatchInfos;
