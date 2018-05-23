import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
  const playerNamePassed = 'Ania';
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find('.player__name').text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
  const playerScorePassed = 23;
  const playerComponent = shallow(<Player score={playerScorePassed} />);

  const playerScoreRendered = playerComponent.find('.player__score').text();

  expect(Number(playerScoreRendered)).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
  const mockedOnPLayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPLayerScoreChange} />);

  const plusButton = playerComponent.find('.player__btn--up');

  plusButton.simulate('click');

  expect(mockedOnPLayerScoreChange).toBeCalledWith(1);
})

it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const minusButton = playerComponent.find('.player__btn--down');

  minusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
})
