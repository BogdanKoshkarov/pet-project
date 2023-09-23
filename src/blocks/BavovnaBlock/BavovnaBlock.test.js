import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BavovnaBlock from './BavovnaBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<BavovnaBlock />);

    const bavovnaBlock = screen.getByTestId('BavovnaBlock');

    expect(bavovnaBlock).toBeInTheDocument();
  });
});
