import React from 'react';
import Player from '../Player/Player';

const PlayersList = (props) => (
  <ul className="players-list">
    {props.players.map((player, idx) => (
      <Player
        key={idx}
        name={player.name}
        score={player.score}
        onPlayerScoreChange={(points) => props.onScoreUpdate(idx, points)}
      />
    ))}
  </ul>
);

export default PlayersList
