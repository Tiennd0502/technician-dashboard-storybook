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
    const { getByTestId } = render(<Pagination {...props} />);
    const pageList = getByTestId('list-page');

    expect(pageList.childNodes).toHaveLength(9);
  });
});
