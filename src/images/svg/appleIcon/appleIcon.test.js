import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppleIcon from './appleIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<AppleIcon />);

    const appleIcon = screen.getByTestId('AppleIcon');

    expect(appleIcon).toBeInTheDocument();
  });
});
