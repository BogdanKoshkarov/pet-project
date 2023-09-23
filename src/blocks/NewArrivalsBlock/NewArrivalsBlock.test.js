import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewArrivalsBlock from './NewArrivalsBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<NewArrivalsBlock />);

    const newArrivalsBlock = screen.getByTestId('NewArrivalsBlock');

    expect(newArrivalsBlock).toBeInTheDocument();
  });
});
