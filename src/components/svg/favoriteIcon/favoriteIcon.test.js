import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FavoriteIcon from './favoriteIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<FavoriteIcon />);

    const favoriteIcon = screen.getByTestId('FavoriteIcon');

    expect(favoriteIcon).toBeInTheDocument();
  });
});
