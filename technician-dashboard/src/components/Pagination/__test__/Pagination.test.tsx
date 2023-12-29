import { render } from '@testing-library/react';

import Pagination from '..';

describe('Pagination test cases', () => {
  const props = {
    page: 1,
    total: 10,
    onChange: jest.fn(),
  };

  test('should render correctly', () => {
    const { container } = render(<Pagination {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render enough elements', () => {
    const { getByRole } = render(<Pagination {...props} />);
    const pageList = getByRole('list');

    expect(pageList.childNodes).toHaveLength(9);
  });
});
