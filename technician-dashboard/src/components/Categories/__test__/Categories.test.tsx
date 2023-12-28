import { render } from '@testing-library/react';

import { CATEGORIES } from '@/__mocks__';
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
    const { getByRole } = render(<Categories {...props} />);
    const categories = getByRole('list');

    expect(categories.childNodes).toHaveLength(CATEGORIES.length);
  });

  test('Should render empty elements', () => {
    const { getByRole } = render(<Categories list={[]} />);
    const categories = getByRole('list');

    expect(categories.childNodes).toHaveLength(0);
  });
});
