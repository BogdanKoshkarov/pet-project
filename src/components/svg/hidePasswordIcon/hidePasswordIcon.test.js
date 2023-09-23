import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HidePasswordIcon from './hidePasswordIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<HidePasswordIcon />);

    const hidePasswordIcon = screen.getByTestId('HidePasswordIcon');

    expect(hidePasswordIcon).toBeInTheDocument();
  });
});
