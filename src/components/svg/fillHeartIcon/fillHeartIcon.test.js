import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FillHeartIcon from './fillHeartIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<FillHeartIcon />);

    const fillHeartIcon = screen.getByTestId('FillHeartIcon');

    expect(fillHeartIcon).toBeInTheDocument();
  });
});
