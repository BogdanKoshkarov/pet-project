import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SaleBlock from './SaleBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<SaleBlock />);

    const saleBlock = screen.getByTestId('SaleBlock');

    expect(saleBlock).toBeInTheDocument();
  });
});
