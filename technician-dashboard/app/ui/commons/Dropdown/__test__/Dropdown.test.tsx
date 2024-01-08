import { render } from '@testing-library/react';

import { AVATAR_DEFAULT } from '@/lib/constants';

import Dropdown from '../index';

describe('Dropdown test cases', () => {
  const props = {
    name: 'John',
    avatar: AVATAR_DEFAULT,
  };

  test('should render correctly', () => {
    const { container } = render(<Dropdown {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('get list options in dropdown component', () => {
    const { getByTestId } = render(<Dropdown {...props} />);

    const avatar = getByTestId('dropdown-options');
    expect(avatar).toBeTruthy();
  });
});
