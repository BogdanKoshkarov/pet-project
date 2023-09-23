import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingCartIcon from './shoppingCartIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ShoppingCartIcon />);

    const shoppingCartIcon = screen.getByTestId('ShoppingCartIcon');

    expect(shoppingCartIcon).toBeInTheDocument();
  });
});
