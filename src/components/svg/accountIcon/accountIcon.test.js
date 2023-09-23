import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountIcon from './accountIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<AccountIcon />);

    const accountIcon = screen.getByTestId('AccountIcon');

    expect(accountIcon).toBeInTheDocument();
  });
});
