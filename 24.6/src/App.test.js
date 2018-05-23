import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// With Enzyme library
it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player state score', () => {
  const appComponent = shallow(<App />);

  const players = [
    {
      name: 'Andrzej',
      score: 0,
    },
  ];

  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find('PlayersList').prop('onScoreUpdate');

  onScoreUpdate(0, 5);

  const playerAfterUpdate = appComponent.state().players;

  expect(playerAfterUpdate[0].score).toEqual(5)
})

it('should add new player to state', () => {
  const appComponent = shallow(<App />);
  const onPlayerAdd = appComponent.find('AddPlayer').prop('onPlayerAdd');
  onPlayerAdd('Rafał');

  const players = appComponent.state().players;

  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Rafał');
  expect(players[0].score).toEqual(0);

})

it('should delete player from state', () => {
  const appComponent = shallow(<App />);

  const players = [
    {
      name: 'Andrzej',
      score: 0,
    },
    {
      name: 'Rafał',
      score: 0,
    },
  ];

  appComponent.setState({ players });

  const onPlayerDelete = appComponent.find('PlayersList').prop('onPlayerDelete');
  onPlayerDelete('Andrzej');

  const statePlayers = appComponent.state().players;

  expect(statePlayers.length).toEqual(1);
})
