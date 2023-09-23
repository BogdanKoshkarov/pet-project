import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BavovnaCoverImageBlock from './BavovnaCoverImageBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<BavovnaCoverImageBlock />);

    const bavovnaCoverImageBlock = screen.getByTestId('BavovnaCoverImageBlock');

    expect(bavovnaCoverImageBlock).toBeInTheDocument();
  });
});
