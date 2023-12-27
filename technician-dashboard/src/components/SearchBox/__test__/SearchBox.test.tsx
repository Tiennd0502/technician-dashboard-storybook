import { fireEvent, render } from '@testing-library/react';
import SearchBox from '..';

const onSearch = jest.fn();

describe('SearchBox component', () => {
  const props = {
    onSearch,
  };

  test('should render correctly', () => {
    const { container } = render(<SearchBox {...props} />);

    expect(container).toMatchSnapshot();
  });

  test('should call the search handler when blur input', () => {
    const { getByPlaceholderText } = render(<SearchBox {...props} />);
    const searchInput = getByPlaceholderText('Enter keyword...');

    fireEvent.change(searchInput, { target: { value: 'keyword' } });
    fireEvent.blur(searchInput);

    expect(onSearch).toHaveBeenCalledWith('keyword');
  });

  test('should show search icon', () => {
    const { getByTestId } = render(<SearchBox {...props} />);
    const target = getByTestId('search-icon');

    expect(target).toBeTruthy();
  });
});
