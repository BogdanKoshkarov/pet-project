import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginLayout from './LoginLayout';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<LoginLayout />);

    const loginLayout = screen.getByTestId('LoginLayout');

    expect(loginLayout).toBeInTheDocument();
  });
});
