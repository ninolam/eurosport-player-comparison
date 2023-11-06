import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { setPlayers } from '../../redux/reducers/players/reducer';
import { setMatches } from '../../redux/reducers/matches/reducer';

import { getPlayers } from '../../redux/reducers/players/selectors'
import PlayerView from '../../components/Player/PlayerView';
import PlayersStatsComparison from '../../components/Player/subComponents/PlayersStatsComparison';
import useAllPlayersAndMatches from '../../api/hooks';


const PlayersView = () => {
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const players = useAppSelector((state) => getPlayers(state))
    const { loading, error, data } = useAllPlayersAndMatches();

    useEffect(() => {
        if (loading) {
            setIsLoading(true)
        }
        if (data) {
            dispatch(setPlayers(data.players))
            dispatch(setMatches(data.matches))
            setIsLoading(false)
        }
    }, [data, dispatch])


    if (isLoading) return <div>Loading....</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div className='max-w-6xl m-auto'>
            <div className="relative flex h-screen">
                {players.map((player, i) => (
                    <PlayerView key={i} player={player} additionnalClassName={`${i === 1 ? 'flex-row-reverse' : ''}`} />
                ))}
                <PlayersStatsComparison firstPlayer={players[0]} secondPlayer={players[1]} />
            </div>
        </div>
    );
}

export default PlayersView;
