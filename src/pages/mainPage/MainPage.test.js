import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainPage from './MainPage';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<MainPage />);

    const mainPage = screen.getByTestId('MainPage');

    expect(mainPage).toBeInTheDocument();
  });
});
