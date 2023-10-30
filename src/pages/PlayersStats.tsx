import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setPlayers } from '../redux/reducers/players/reducer';
import SinglePlayer from '../components/SinglePlayer/SinglePlayer';
import { GET_PLAYERS } from '../api/getPlayers';


const PlayersStats = () => {
    const dispatch = useAppDispatch()
    const players = useAppSelector((state) => state.players)
    const { loading, error, data } = useQuery(GET_PLAYERS);

    useEffect(() => {
        if (data) {
            dispatch(setPlayers(data.players))
        }
    }, [data, dispatch])

    if (loading) return <div>Loading....</div>

    return (
        <div className="PlayersStats">
            {players.list.map(player => <SinglePlayer player={player} />)}
        </div>
    );
}

export default PlayersStats;
