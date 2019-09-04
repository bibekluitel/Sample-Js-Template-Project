import React from 'react';
import Dashbaord from './Dashboard';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(Dashbaord)
    .toJSON();
  expect(tree).toMatchSnapshot();
});