import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getAllPlayers, setPlayer } from '../redux/reducers/players/reducer';
import PlayerView from '../components/Player/PlayerView';
import { GET_STATS } from '../api/getPlayers';
import type { Player } from '../redux/reducers/players/types';
import type { Match } from '../redux/reducers/matches/types';
import { setMatch } from '../redux/reducers/matches/reducer';
import PlayersStatsComparison from '../components/Player/subComponents/PlayersStatsComparison';

export interface Stats {
    players: Player[]
    matches: Match[]
}

const PlayersView = () => {
    const dispatch = useAppDispatch()
    const players = useAppSelector((state) => getAllPlayers(state))
    const { loading, error, data } = useQuery<Stats>(GET_STATS);

    useEffect(() => {
        if (data) {
            data.players.forEach(player => dispatch(setPlayer(player)));
            data.matches.forEach(match => dispatch(setMatch(match)));
        }
    }, [data, dispatch])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (loading || players.length === 0) return <div>Loading....</div>

    return (
        <div className='max-w-6xl m-auto'>
            <div className="relative flex h-screen">
                <PlayerView id={players[0]} position='right' />
                <PlayersStatsComparison firstId={players[0]} secondId={players[1]} />
                <PlayerView id={players[1]} additionnalClassName='flex-row-reverse' position='left' />
            </div>
        </div>
    );
}

export default PlayersView;
