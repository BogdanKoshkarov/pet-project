import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemPreviewCard from './ItemPreviewCard';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ItemPreviewCard />);

    const itemPreviewCard = screen.getByTestId('ItemPreviewCard');

    expect(itemPreviewCard).toBeInTheDocument();
  });
});
