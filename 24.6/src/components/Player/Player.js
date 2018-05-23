import React from 'react';

const Player = (props) => (
  <li className="player">
    <span className="player__name">{props.name}</span>
    <span className="player__score">{props.score}</span>
    <button
      className="player__btn player__btn--up"
      onClick={() => props.onPlayerScoreChange(1)}
    >+</button>
    <button
      className="player__btn player__btn--down"
      onClick={() => props.onPlayerScoreChange(-1)}
    >-</button>
    <button
      className="player__btn player__btn--delete"
      onClick={() => props.onPlayerDelete(props.name)}
    >X</button>
  </li>
);

export default Player;
