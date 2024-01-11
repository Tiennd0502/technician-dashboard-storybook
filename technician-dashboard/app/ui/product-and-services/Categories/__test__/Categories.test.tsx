import { render } from '@testing-library/react';

import { CATEGORIES } from '@/lib/constants';
import Categories from '..';

describe('Categories test cases', () => {
  const props = {
    list: CATEGORIES,
  };

  test('should render correctly', () => {
    const { container } = render(<Categories {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render enough elements', () => {
    const { getByTestId } = render(<Categories {...props} />);
    const categories = getByTestId('list-category');

    expect(categories.childNodes).toHaveLength(CATEGORIES.length);
  });

  test('Should render empty elements', () => {
    const { getByTestId } = render(<Categories list={[]} />);
    const categories = getByTestId('list-category');

    expect(categories.childNodes).toHaveLength(0);
  });
});
