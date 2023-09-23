import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LeftArrowIcon from './leftArrowIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<LeftArrowIcon />);

    const leftArrowIcon = screen.getByTestId('LeftArrowIcon');

    expect(leftArrowIcon).toBeInTheDocument();
  });
});
