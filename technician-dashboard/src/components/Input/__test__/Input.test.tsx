import { fireEvent, render } from '@testing-library/react';
import Input from '..';

describe('Input component', () => {
  const onChange = jest.fn();

  test('should show error message when reive error', () => {
    const props = {
      error: 'Error message',
    };

    const { getByText } = render(<Input {...props} />);
    const error = getByText('Error message');

    expect(error).toBeTruthy();
  });

  test('should show label', () => {
    const props = {
      label: 'Name',
    };
    const { getByText } = render(<Input {...props} />);
    const target = getByText('Name');

    expect(target).toBeTruthy();
  });

  it('should call onChange handler when value changes', async () => {
    const props = {
      placeholder: 'Name',
      value: '',
      onChange,
    };

    const { getByPlaceholderText } = render(<Input {...props} />);
    const input = getByPlaceholderText('Name');
    fireEvent.change(input, { target: { value: 'Product' } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('match snapshot', () => {
    const props = {
      error: 'Error message',
      label: 'Name',
    };
    const { container } = render(<Input {...props} />);

    expect(container).toMatchSnapshot();
  });
});
