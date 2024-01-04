import { render } from '@testing-library/react';
import Layout from '..';

describe('Layout component', () => {
  const props = {
    children: 'Children',
  };

  test('should show children', () => {
    const { getByText } = render(<Layout {...props} />);
    const children = getByText('Children');

    expect(children).toBeTruthy();
  });

  test('match snapshot', () => {
    const { container } = render(<Layout {...props} />);

    expect(container).toMatchSnapshot();
  });
});
