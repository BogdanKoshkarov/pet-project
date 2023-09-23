import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoryPreviewCard from './CategoryPreviewCard';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CategoryPreviewCard />);

    const categoryPreviewCard = screen.getByTestId('CategoryPreviewCard');

    expect(categoryPreviewCard).toBeInTheDocument();
  });
});
