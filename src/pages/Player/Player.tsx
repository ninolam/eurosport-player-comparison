import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setPlayer } from '../../redux/reducers/players/reducer';
import { getPlayersByID } from '../../redux/reducers/players/selectors';
import { setMatch } from '../../redux/reducers/matches/reducer';
import { getAllMatchesIds, getAllMatchesByID } from '../../redux/reducers/matches/selectors';

import GameCard from '../../components/GameCard/GameCard';
import { getMatchesSortedByDescending } from '../../helpers/getMatchesSortedByDescending';

import useAllPlayersAndMatches from '../../api/hooks';

const Player = () => {
    const dispatch = useAppDispatch()
    const params = useParams()
    const { state: { opponentId } } = useLocation()
    const { loading, error, data } = useAllPlayersAndMatches();

    const matches = useAppSelector((state) => getAllMatchesIds(state))
    const matchesById = useAppSelector((state) => getAllMatchesByID(state))
    const playersByID = useAppSelector((state) => getPlayersByID(state))

    const currentPlayer = playersByID[params.id!]
    const opponentPlayer = playersByID[opponentId]
    const winningMatches = matches.filter(match => matchesById[match].winner.id === params.id)
    const { age, rank, points, height, weight } = currentPlayer?.stats || {}

    useEffect(() => {
        if (data && (matches.length === 0) ) {
            data.players.forEach(player => dispatch(setPlayer(player)));
            getMatchesSortedByDescending(data.matches).forEach(match => dispatch(setMatch(match)));
        }
    }, [data, dispatch])

    if (loading || !currentPlayer) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    const renderPlayerStats = () => (
        <section className='flex justify-center py-8 px-12 text-left flex-wrap'>
            <img className='max-w-70px h-full lg:max-w-full' alt={currentPlayer.shortname} src={currentPlayer.picture.url} />
            <div className='ml-8 text-sm lg:text-2xl'>
                <p className=' uppercase font-bold'>{currentPlayer.firstname} {currentPlayer.lastname}</p>
                <div className='flex mt-3'>
                    <img className="mr-5 h-auto w-10" alt={currentPlayer.shortname} src={currentPlayer.country.picture.url} />
                    <p className='inline-block font-bold'>{currentPlayer.country.code}</p>
                </div>
            </div>
            <div className='mt-4 lg:ml-10 lg:mt-0 rounded-lg border py-3 px-4 lg:px-8 flex flex-col justify-around w-72'>
                <p className='text-xs lg:text-xl font-bold'> <span className='uppercase text-stone-400'>Age: </span>{age}</p>
                <p className='text-xs lg:text-xl font-bold'> <span className='uppercase text-stone-400'>Rank: </span>{rank}</p>
                <p className='text-xs lg:text-xl font-bold'> <span className='uppercase text-stone-400'>Points: </span>{points}</p>
                <p className='text-xs lg:text-xl font-bold'> <span className='uppercase text-stone-400'>Poids: </span>{weight / 1000} kg</p>
                <p className='text-xs lg:text-xl font-bold'> <span className='uppercase text-stone-400'>Taille: </span>{height / 100} m</p>
            </div>
        </section>
    )

    const renderGamesPlayed = () => (
        <section className='max-w-90 lg:max-w-75 m-auto'>
            <h1 className='text-2xl lg:text-5xl text-left my-8'>Matchs gagnés contre {opponentPlayer.shortname}</h1>
            {winningMatches.map(match => {
                const currentMatch = matchesById[match]
                const { winner, startTime, endTime } = currentMatch
                return (
                    <GameCard
                        key={currentMatch.id}
                        winner={playersByID[winner.id]}
                        opponent={opponentPlayer}
                        startTime={startTime}
                        endTime={endTime}
                    />
                )
            })}
        </section>
    )


    return (
        <div className="max-w-6xl m-auto">
            <div className={`BackgroundGrayscale text-white	relative flex flex-col justify-center`}>
                <Link className='text-left mt-4 ml-4' to='/'>
                    Retour aux comparatifs
                </Link>
                {renderPlayerStats()}
            </div>
            {renderGamesPlayed()}
        </div>
    );
}

export default Player;
