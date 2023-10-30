import React from 'react';
import type { Player } from '../../redux/reducers/players/types';

interface Props {
    player: Player
}

const SinglePlayer = ({ player }: Props) => {
    return (
        <div className="SinglePlayer">
            <p>{player.firstname}</p>
        </div>
    );
}

export default SinglePlayer;
