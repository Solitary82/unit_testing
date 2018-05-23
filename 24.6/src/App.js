import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList'
import AddPlayer from './components/AddPlayer/AddPlayer'

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: []
    }
  }

  onPlayerAdd = (playerName) => {
    this.setState({
      players: [
        ...this.state.players,
        { name: playerName, score: 0 }
      ]
    })
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, idx)=> {
        if(idx === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      }),
    });
  }

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd}/>
        <PlayersList
          players={this.state.players}
          onScoreUpdate={this.onScoreUpdate}
        />
      </div>
    );
  }
}

export default App;
