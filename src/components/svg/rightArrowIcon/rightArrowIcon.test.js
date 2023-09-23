import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RightArrowIcon from './rightArrowIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<RightArrowIcon />);

    const rightArrowIcon = screen.getByTestId('RightArrowIcon');

    expect(rightArrowIcon).toBeInTheDocument();
  });
});
