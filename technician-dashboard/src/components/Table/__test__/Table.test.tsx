import { render } from '@testing-library/react';
import * as mediaQueryHooks from '@chakra-ui/react';

import { DEFAULT_PRODUCT_FILTER } from '@/constants';
import { PRODUCTS, PRODUCT_HEADER_COLUMNS } from '@/__mocks__';

import Table from '..';

jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react');

  return {
    __esModule: true,
    ...originalModule,
    useMediaQuery: jest.fn().mockImplementation(() => [true]),
  };
});

describe('Table test cases', () => {
  jest.spyOn(mediaQueryHooks, 'useMediaQuery').mockImplementationOnce(() => [true]);

  const props = {
    title: 'Products listing',
    filter: DEFAULT_PRODUCT_FILTER,
    columns: PRODUCT_HEADER_COLUMNS,
    data: PRODUCTS,
  };

  test('should render correctly', () => {
    const { container } = render(<Table {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render enough header elements', () => {
    const { getByRole } = render(<Table {...props} />);
    const header = getByRole('list');

    expect(header.childNodes).toHaveLength(PRODUCT_HEADER_COLUMNS.length);
  });

  test('Should render empty header elements', () => {
    const { getByRole } = render(
      <Table data={[]} columns={[]} filter={DEFAULT_PRODUCT_FILTER} title='Products listing' />,
    );
    const header = getByRole('list');

    expect(header.childNodes).toHaveLength(0);
  });
});
