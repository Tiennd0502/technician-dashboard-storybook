import { fireEvent, render, screen } from '@testing-library/react';
import * as mediaQueryHooks from '@chakra-ui/react';

import { DEFAULT_PRODUCT_FILTER, NO_DATA, PRODUCTS } from '@/lib/constants';
import { generateProductHeaderColumn } from '@/lib/utils/table';

import Table from '..';
import { SORT_TYPE } from '@/lib/interfaces';

jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react');

  return {
    __esModule: true,
    ...originalModule,
    useMediaQuery: jest.fn().mockImplementation(() => [true]),
  };
});

const onDelete = jest.fn();
const onEdit = jest.fn();
const onSort = jest.fn();
const columns = generateProductHeaderColumn();

describe('Table test cases', () => {
  jest.spyOn(mediaQueryHooks, 'useMediaQuery').mockImplementationOnce(() => [true]);

  const props = {
    filter: DEFAULT_PRODUCT_FILTER,
    columns: columns,
    data: PRODUCTS,
  };

  test('should render correctly', () => {
    const { container } = render(<Table {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render enough header elements', () => {
    const { getByTestId } = render(<Table {...props} />);
    const header = getByTestId('list-header');

    expect(header.childNodes).toHaveLength(columns.length);
  });

  test('Should render empty header elements', () => {
    const { getByTestId } = render(
      <Table data={[]} columns={[]} filter={DEFAULT_PRODUCT_FILTER} />,
    );
    const header = getByTestId('list-header');

    expect(header.childNodes).toHaveLength(0);
  });

  test('Should render empty body elements', () => {
    render(<Table data={[]} columns={columns} filter={DEFAULT_PRODUCT_FILTER} />);

    const text = screen.getByTestId('no-data');
    expect(text.innerHTML).toEqual(NO_DATA);
  });

  test('Should render empty data', () => {
    render(<Table data={[]} columns={columns} filter={DEFAULT_PRODUCT_FILTER} />);

    const text = screen.getByTestId('no-data');
    expect(text.innerHTML).toEqual(NO_DATA);
  });

  test('Should render icon sort asc', () => {
    render(<Table {...props} />);
    const button = screen.queryByTestId('sort-asc');

    expect(button).toBeDefined();
  });

  test('Should render icon sort desc', () => {
    render(<Table {...props} filter={{ ...DEFAULT_PRODUCT_FILTER, order: SORT_TYPE.Desc }} />);
    const button = screen.queryByTestId('sort-desc');

    expect(button).toBeDefined();
  });

  test('should render correctly with mobile device', () => {
    jest.spyOn(mediaQueryHooks, 'useMediaQuery').mockImplementationOnce(() => [false]);

    const { container } = render(<Table {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('calls onEdit when being clicked', () => {
    render(<Table {...props} onEdit={onEdit} />);
    const button = screen.getAllByText('Edit')[0];
    fireEvent.click(button);

    expect(onEdit).toHaveBeenCalled();
  });

  test('calls onDelete when being clicked', () => {
    render(<Table {...props} onDelete={onDelete} />);
    const button = screen.getAllByText('Delete')[0];
    fireEvent.click(button);

    expect(onDelete).toHaveBeenCalled();
  });
});
