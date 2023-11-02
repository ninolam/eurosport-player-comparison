import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getPlayersByID, setPlayer } from '../redux/reducers/players/reducer';
import { getAllMatchesIds, getAllMatchesByID, setMatch } from '../redux/reducers/matches/reducer';
import GameCard from '../components/GameCard/GameCard';
import { useQuery } from '@apollo/client';
import { GET_STATS } from '../api/getPlayers';
import { Stats } from './PlayersView';

const Player = () => {
    const params = useParams()
    const { state: { opponentId } } = useLocation()
    const { loading, error, data } = useQuery<Stats>(GET_STATS);
    const dispatch = useAppDispatch()
    const matches = useAppSelector((state) => getAllMatchesIds(state))
    const matchesById = useAppSelector((state) => getAllMatchesByID(state))
    const playersByID = useAppSelector((state) => getPlayersByID(state))
    const player = playersByID[params.id!]
    const winningMatches = matches.filter(match => matchesById[match].winner.id === params.id)

    useEffect(() => {
        console.log(data);
        if (data) {
            data.players.forEach(player => dispatch(setPlayer(player)));
            data.matches.forEach(match => dispatch(setMatch(match)));
        }
    }, [data, dispatch])

    if (loading || !player) return <div>Loading...</div>
    if (error) return null

    return (
        <div className="max-w-6xl m-auto">
            <div className={`BackgroundGrayscale text-white	relative flex flex-col justify-center`}>
                <Link className='text-left mt-4 ml-4' to='/'>
                    Retour aux comparatifs
                </Link>
                <div className='flex flex-col justify-center items-center p-3.5'>
                    <p className='text-2xl uppercase font-bold mb-4'>{player.firstname} {player.lastname}</p>
                    <img className='mb-4' alt={player.shortname} src={player.picture.url} />
                    <div className='w-10'>
                        <img className="mr-5 w-auto h-auto" alt={player.shortname} src={player.country.picture.url} />
                    </div>
                    <p>{player.stats.age} ans</p>
                </div>
            </div>
            <h1 className='text-5xl text-left my-8'>Matchs gagnés contre {playersByID[opponentId].shortname}</h1>
            {winningMatches.map(match => {
                const currentMatch = matchesById[match]
                const { winner, startTime, endTime } = currentMatch
                return (
                    <GameCard
                        key={currentMatch.id}
                        winnerId={winner.id}
                        startTime={startTime}
                        endTime={endTime}
                        opponentId={opponentId}
                    />
                )
            })}
        </div>
    );
}

export default Player;
