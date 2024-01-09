import { render } from '@testing-library/react';
import * as mediaQueryHooks from '@chakra-ui/react';

import Layout from '..';

jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react');

  return {
    __esModule: true,
    ...originalModule,
    useMediaQuery: jest.fn().mockImplementation(() => [true]),
  };
});

describe('Layout component', () => {
  jest.spyOn(mediaQueryHooks, 'useMediaQuery').mockImplementationOnce(() => [true]);

  const props = {
    children: 'Children',
  };

  test('should show children with MiniSidebar', () => {
    const { getByText } = render(<Layout {...props} />);
    const children = getByText('Children');

    expect(children).toBeTruthy();
  });

  test('should show children with Sidebar', () => {
    jest.spyOn(mediaQueryHooks, 'useMediaQuery').mockImplementationOnce(() => [false]);

    const { getByText } = render(<Layout {...props} />);
    const children = getByText('Children');

    expect(children).toBeTruthy();
  });

  test('match snapshot', () => {
    const { container } = render(<Layout {...props} />);

    expect(container).toMatchSnapshot();
  });
});
