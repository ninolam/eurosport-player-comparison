import React from 'react';
import "react-circular-progressbar/dist/styles.css";
import { useColor } from 'color-thief-react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'

import type { Player } from '../../redux/reducers/players/types';

interface Props {
    player: Player
    additionnalClassName?: string
}

const PlayerView = ({ player, additionnalClassName }: Props) => {
    const googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
    const imageSrc = googleProxyURL + encodeURIComponent(player?.country.picture.url)
    const { data } = useColor(imageSrc, 'rgbArray', { crossOrigin: 'anonymous', quality: 10 })

    if (!player) return null
    return (
        <div className={`text-white	relative w-2/4 flex items-start ${additionnalClassName}`} style={{ backgroundColor: `rgba(${data}, 0.9)` }}>
            <div className='flex flex-col items-center p-3.5'>
                <Link to={`player/${player.id}`}>
                    <p className='text-2xl uppercase font-bold mb-4'>{player.firstname} {player.lastname}</p>
                </Link>
                <Link to={`player/${player.id}`}>
                    <img data-tooltip-id="player-tooltip" data-tooltip-content={`Clique pour voir les stats de ${player.shortname}`} className='mb-4' alt={player.shortname} src={player.picture.url} />
                    <Tooltip id='player-tooltip' data-tooltip-place="top" />
                </Link>
                <div className='w-10'>
                    <img data-tooltip-id="country-tooltip" data-tooltip-content={player.country.code} className="mr-5 w-auto h-auto" alt={player.shortname} src={player.country.picture.url} />
                    <Tooltip id='country-tooltip' data-tooltip-place="right" />
                </div>
            </div>
        </div>
    );
}

export default PlayerView;
