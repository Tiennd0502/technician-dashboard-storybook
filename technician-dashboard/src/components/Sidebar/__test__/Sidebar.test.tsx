import { render } from '@testing-library/react';

import { MENU_ITEM_LIST } from '@/constants';
import Sidebar from '..';

describe('Sidebar test cases', () => {
  const props = {
    listItem: MENU_ITEM_LIST,
  };

  test('should render correctly', () => {
    const { container } = render(<Sidebar {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render enough elements', () => {
    const { getByRole } = render(<Sidebar {...props} />);
    const menuList = getByRole('list');

    expect(menuList.childNodes).toHaveLength(MENU_ITEM_LIST.length);
  });

  test('Should render empty elements', () => {
    const { getByRole } = render(<Sidebar listItem={[]} />);
    const menuList = getByRole('list');

    expect(menuList.childNodes).toHaveLength(0);
  });
});
