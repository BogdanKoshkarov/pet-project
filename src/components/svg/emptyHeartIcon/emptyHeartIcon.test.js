import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmptyHeartIcon from './emptyHeartIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<EmptyHeartIcon />);

    const emptyHeartIcon = screen.getByTestId('EmptyHeartIcon');

    expect(emptyHeartIcon).toBeInTheDocument();
  });
});
