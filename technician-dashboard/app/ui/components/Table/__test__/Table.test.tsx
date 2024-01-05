import { fireEvent, render, screen } from '@testing-library/react';
import * as mediaQueryHooks from '@chakra-ui/react';

import { DEFAULT_PRODUCT_FILTER, NO_DATA } from '@/lib/constants';
import { PRODUCTS, PRODUCT_HEADER_COLUMNS } from '@/lib/__mocks__';

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

describe('Table test cases', () => {
  jest.spyOn(mediaQueryHooks, 'useMediaQuery').mockImplementationOnce(() => [true]);

  const props = {
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
    const { getByRole } = render(<Table data={[]} columns={[]} filter={DEFAULT_PRODUCT_FILTER} />);
    const header = getByRole('list');

    expect(header.childNodes).toHaveLength(0);
  });

  test('Should render empty body elements', () => {
    render(<Table data={[]} columns={PRODUCT_HEADER_COLUMNS} filter={DEFAULT_PRODUCT_FILTER} />);

    const text = screen.getByTestId('no-data');
    expect(text.innerHTML).toEqual(NO_DATA);
  });

  test('Should render empty data', () => {
    render(<Table data={[]} columns={PRODUCT_HEADER_COLUMNS} filter={DEFAULT_PRODUCT_FILTER} />);

    const text = screen.getByTestId('no-data');
    expect(text.innerHTML).toEqual(NO_DATA);
  });

  test('Should render sort asc click', () => {
    render(<Table {...props} />);
    const button = screen.getByTestId('sort-asc');
    fireEvent.click(button);

    expect(jest.fn()).toHaveBeenCalled();
  });

  test('Should render sort desc click', () => {
    render(<Table {...props} filter={{ ...DEFAULT_PRODUCT_FILTER, order: SORT_TYPE.Desc }} />);
    const button = screen.getByTestId('sort-desc');
    fireEvent.click(button);

    expect(jest.fn()).toHaveBeenCalled();
  });

  test('should render correctly with mobile device', () => {
    jest.spyOn(mediaQueryHooks, 'useMediaQuery').mockImplementationOnce(() => [false]);

    const { container } = render(<Table {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render edit click', () => {
    render(<Table {...props} />);
    const button = screen.getByTestId('btn-edit');
    fireEvent.click(button);

    expect(jest.fn()).toHaveBeenCalled();
  });

  test('calls onEdit when being clicked', () => {
    const onEdit = jest.fn();
    render(<Table {...props} onEdit={onEdit} />);
    const button = screen.getByTestId('btn-edit');
    fireEvent.click(button);

    expect(onEdit).toHaveBeenCalled();
  });

  test('calls onDelete when being clicked', () => {
    const onDelete = jest.fn();

    render(<Table {...props} onDelete={onDelete} />);
    const button = screen.getByTestId('btn-delete');
    fireEvent.click(button);

    expect(onDelete).toHaveBeenCalled();
  });
});
