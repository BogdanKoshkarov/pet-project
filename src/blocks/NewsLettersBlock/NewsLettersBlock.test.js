import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewsLettersBlock from './NewsLettersBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<NewsLettersBlock />);

    const newsLettersBlock = screen.getByTestId('NewsLettersBlock');

    expect(newsLettersBlock).toBeInTheDocument();
  });
});
