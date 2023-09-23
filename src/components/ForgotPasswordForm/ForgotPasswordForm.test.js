import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ForgotPasswordForm from './ForgotPasswordForm';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ForgotPasswordForm />);

    const forgotPasswordForm = screen.getByTestId('ForgotPasswordForm');

    expect(forgotPasswordForm).toBeInTheDocument();
  });
});
