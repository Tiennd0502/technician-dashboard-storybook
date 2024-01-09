import { render } from '@testing-library/react';
import * as mediaQueryHooks from '@chakra-ui/react';

import { MENU_ITEM_LIST } from '@/lib/constants';
import MiniSidebar from '..';

const onToggle = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockReturnValue('/product-and-services'),
}));

jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react');

  return {
    __esModule: true,
    ...originalModule,
    useDisclosure: jest
      .fn()
      .mockImplementation(() => ({ isOpen: true, onToggle: () => jest.fn() })),
  };
});

describe('MiniSidebar test cases', () => {
  jest.spyOn(mediaQueryHooks, 'useDisclosure').mockImplementationOnce(() => ({
    isOpen: false,
    onToggle: jest.fn(),
    onOpen: jest.fn(),
    onClose: jest.fn(),
    isControlled: true,
    getButtonProps: (props?: any) => jest.fn(),
    getDisclosureProps: (props?: any) => jest.fn(),
  }));

  const props = {
    listItem: MENU_ITEM_LIST,
  };

  test('should render correctly', () => {
    const { container } = render(<MiniSidebar {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render enough elements', () => {
    const { getByRole } = render(<MiniSidebar {...props} />);
    const menuList = getByRole('list');

    expect(menuList.childNodes).toHaveLength(MENU_ITEM_LIST.length);
  });

  test('Should render empty elements', () => {
    const { getByRole } = render(<MiniSidebar listItem={[]} />);
    const menuList = getByRole('list');

    expect(menuList.childNodes).toHaveLength(0);
  });
});
