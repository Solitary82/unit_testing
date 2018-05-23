import React from 'react';
import { mount } from 'enzyme';
import AddPlayer from './AddPlayer';

it('should call onPlayerAdd', () => {
  const onPlayerAdd = jest.fn();
  const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);

  const nameInput = addPlayerComponent.find('input').first().getDOMNode();

  nameInput.value = 'Krysia';

  const form = addPlayerComponent.find('form');
  form.simulate('submit');

  expect(onPlayerAdd).toBeCalledWith('Krysia')
})
