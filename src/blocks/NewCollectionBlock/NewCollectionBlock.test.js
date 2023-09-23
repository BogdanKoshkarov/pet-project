import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewCollectionBlock from './NewCollectionBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<NewCollectionBlock />);

    const newCollectionBlock = screen.getByTestId('NewCollectionBlock');

    expect(newCollectionBlock).toBeInTheDocument();
  });
});
