import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckboxField from './checkboxField';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CheckboxField />);

    const checkboxField = screen.getByTestId('CheckboxField');

    expect(checkboxField).toBeInTheDocument();
  });
});
