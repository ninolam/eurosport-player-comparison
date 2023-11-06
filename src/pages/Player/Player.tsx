import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setPlayers } from '../../redux/reducers/players/reducer';
import { getPlayers } from '../../redux/reducers/players/selectors';
import { setMatches } from '../../redux/reducers/matches/reducer';
import { getAllMatches } from '../../redux/reducers/matches/selectors';

import GameCard from '../../components/MatchCard/MatchCard';

import useAllPlayersAndMatches from '../../api/hooks';
import type { Player as PlayerType } from '../../redux/reducers/players/types';

const Player = () => {
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    const { loading, error, data } = useAllPlayersAndMatches();

    const matches = useAppSelector((state) => getAllMatches(state))
    const players = useAppSelector((state) => getPlayers(state))

    const currentPlayer = (players.find(player => player.id === params.id) as PlayerType) || {}
    const opponentPlayer = (players.find(player => player.id !== params.id) as PlayerType) || {}

    const winningMatches = matches.filter(match => match.winner.id === params.id)
    const { age, rank, points, height, weight } = currentPlayer?.stats || {}

    useEffect(() => {
        if (loading) {
            setIsLoading(true)
        }
        if (data && (matches.length === 0)) {
            dispatch(setPlayers(data.players))
            dispatch(setMatches(data.matches))
            setIsLoading(false)
        }
    }, [data, dispatch])

    if (isLoading) return <div>Loading....</div>
    if (error) return <div>Error: {error.message}</div>

    
    const renderPlayerStats = () => (
        <section className='flex justify-center py-8 px-12 text-left flex-wrap'>
            <img className='max-w-70px h-full lg:max-w-full' alt={currentPlayer.shortname} src={currentPlayer.picture?.url} />
            <div className='ml-8 text-sm lg:text-2xl'>
                <p className=' uppercase font-bold'>{currentPlayer.firstname} {currentPlayer.lastname}</p>
                <div className='flex mt-3'>
                    <img className="mr-5 h-auto w-10" alt={currentPlayer.shortname} src={currentPlayer.country?.picture?.url} />
                    <p className='inline-block font-bold'>{currentPlayer.country?.code}</p>
                </div>
            </div>
            <div className='mt-4 md:ml-10 lg:mt-0 rounded-lg border py-3 px-4 lg:px-8 flex flex-col justify-around w-auto lg:w-72'>
                <p className='text-xs lg:text-xl font-bold'> <span className='uppercase text-stone-400'>Age: </span>{age}</p>
                <p className='text-xs lg:text-xl font-bold'> <span className='uppercase text-stone-400'>Rank: </span>{rank}</p>
                <p className='text-xs lg:text-xl font-bold'> <span className='uppercase text-stone-400'>Points: </span>{points}</p>
                <p className='text-xs lg:text-xl font-bold'> <span className='uppercase text-stone-400'>Poids: </span>{(weight || 0) / 1000} kg</p>
                <p className='text-xs lg:text-xl font-bold'> <span className='uppercase text-stone-400'>Taille: </span>{(height || 0) / 100} m</p>
            </div>
        </section>
    )

    const renderGamesPlayed = () => (
        <section className='max-w-90 lg:max-w-75 m-auto'>
            <h1 className='text-2xl lg:text-5xl text-left my-8'>Matchs gagnés contre {opponentPlayer.shortname}</h1>
            {winningMatches.map(currentMatch => {
                const { startTime, endTime } = currentMatch
                return (
                    <GameCard
                        key={currentMatch.id}
                        winner={currentPlayer}
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
                    Retour au comparatif
                </Link>
                {renderPlayerStats()}
            </div>
            {renderGamesPlayed()}
        </div>
    );
}

export default Player;
