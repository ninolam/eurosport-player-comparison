import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { setPlayer } from '../../redux/reducers/players/reducer';
import { setMatch } from '../../redux/reducers/matches/reducer';

import { getAllPlayers } from '../../redux/reducers/players/selectors'
import PlayerView from '../../components/Player/PlayerView';
import PlayersStatsComparison from '../../components/Player/subComponents/PlayersStatsComparison';
import { getMatchesSortedByDescending } from '../../helpers/getMatchesSortedByDescending';
import useAllPlayersAndMatches from '../../api/hooks';


const PlayersView = () => {
    const dispatch = useAppDispatch()
    const players = useAppSelector((state) => getAllPlayers(state))
    const { loading, error, data } = useAllPlayersAndMatches();

    useEffect(() => {
        if (data) {
            data.players.forEach(player => dispatch(setPlayer(player)));
            getMatchesSortedByDescending(data.matches).forEach(match => dispatch(setMatch(match)));
        }
    }, [data, dispatch])


    // if (loading || players.length === 0) return <div>Loading....</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div className='max-w-6xl m-auto'>
            <div className="relative flex h-screen">
                {players.map((player, i) => (
                    <PlayerView key={i} id={player} additionnalClassName={`${i === 1 ? 'flex-row-reverse' : ''}`} />
                ))}
                <PlayersStatsComparison firstId={players[0]} secondId={players[1]} />
            </div>
        </div>
    );
}

export default PlayersView;
