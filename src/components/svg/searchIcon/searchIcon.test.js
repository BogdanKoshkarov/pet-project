import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchIcon from './searchIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<SearchIcon />);

    const searchIcon = screen.getByTestId('SearchIcon');

    expect(searchIcon).toBeInTheDocument();
  });
});
