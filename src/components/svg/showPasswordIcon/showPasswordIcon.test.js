import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShowPasswordIcon from './showPasswordIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ShowPasswordIcon />);

    const showPasswordIcon = screen.getByTestId('ShowPasswordIcon');

    expect(showPasswordIcon).toBeInTheDocument();
  });
});
