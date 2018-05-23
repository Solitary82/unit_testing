import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<PlayersList players={[]} />);
});

it('renders correct number of players', () => {
  const players = [
    {
      name: 'Magdalena',
      score: 25,
    },
    {
      name: 'Seba',
      score: 0,
    },
  ];

  const playerComponent = shallow(<PlayersList players={players} />);

  const expectedPlayersNumber = playerComponent.find('Player').length;

  expect(expectedPlayersNumber).toEqual(2);
})

it('should call onScoreUpdate', () => {
  const players = [
    {
      name: 'Magdalena',
      score: 25,
    },
    {
      name: 'Seba',
      score: 0,
    },
  ];

  const mockedOnScoreUpdate = jest.fn();

  const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />)

  const firstPlayer = playerComponent.find('Player').first();

  const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');

  onPlayerScoreChange(10);

  expect(mockedOnScoreUpdate).toBeCalledWith(0, 10)
})

it('should call onScoreUpdate with 10', () => {
  const players = [
    {
      name: 'Magdalena',
      score: 25,
    },
    {
      name: 'Seba',
      score: 0,
    },
  ];

  const mockedOnScoreUpdate = jest.fn();

  const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />)

  const firstPlayer = playerComponent.find('Player').at(1);

  const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');

  onPlayerScoreChange(25);

  expect(mockedOnScoreUpdate).toBeCalledWith(1, 25)
})

it('should call onPlayerDelete', () => {
  const players = [
    {
      name: 'Magdalena',
      score: 25,
    },
    {
      name: 'Seba',
      score: 0,
    },
  ];

  const mockedOnPlayerDelete = jest.fn();

  const playerComponent = shallow(<PlayersList players={players} onPlayerDelete={mockedOnPlayerDelete} />)

  const firstPlayer = playerComponent.find('Player').first();

  const onPlayerDelete = firstPlayer.prop('onPlayerDelete');

  onPlayerDelete('Magdalena');

  expect(mockedOnPlayerDelete).toBeCalledWith('Magdalena')
})

