import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GoogleIcon from './googleIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<GoogleIcon />);

    const googleIcon = screen.getByTestId('GoogleIcon');

    expect(googleIcon).toBeInTheDocument();
  });
});
