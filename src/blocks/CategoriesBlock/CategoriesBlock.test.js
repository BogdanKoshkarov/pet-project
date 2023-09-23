import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoriesBlock from './CategoriesBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CategoriesBlock />);

    const categoriesBlock = screen.getByTestId('CategoriesBlock');

    expect(categoriesBlock).toBeInTheDocument();
  });
});
