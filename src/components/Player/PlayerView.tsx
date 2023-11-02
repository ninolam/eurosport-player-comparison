import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getPlayersByID, getAllPlayers } from '../../redux/reducers/players/reducer';
import "react-circular-progressbar/dist/styles.css";
import { useColor } from 'color-thief-react';
import { Link } from 'react-router-dom';

interface Props {
    id: string
    additionnalClassName?: string
    position: 'right' | 'left'
}

const PlayerView = ({ id, additionnalClassName }: Props) => {
    const player = useAppSelector((state) => getPlayersByID(state)[id])
    const allPlayers = useAppSelector((state) => getAllPlayers(state))
    const opponentId = allPlayers.filter(playerId => playerId !== id)[0]
    let googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
    const imageSrc = googleProxyURL + encodeURIComponent(player.country.picture.url)
    const { data } = useColor(imageSrc, 'rgbArray', { crossOrigin: 'anonymous', quality: 10 })

    return (
        <div className={`text-white	relative w-2/4 flex items-start ${additionnalClassName}`} style={{ backgroundColor: `rgba(${data}, 0.9)` }}>
            <div className='flex flex-col items-center p-3.5'>
                <Link to={`player/${id}`} state={{ opponentId }}>
                    <p className='text-2xl uppercase font-bold mb-4'>{player.firstname} {player.lastname}</p>
                </Link>
                <Link to={`player/${id}`} state={{ opponentId }}>
                    <img className='mb-4' alt={player.shortname} src={player.picture.url} />
                </Link>
                <div className='w-10'>
                    <img className="mr-5 w-auto h-auto" alt={player.shortname} src={player.country.picture.url} />
                </div>
                <p>{player.stats.age} ans</p>
            </div>
        </div>
    );
}

export default PlayerView;
