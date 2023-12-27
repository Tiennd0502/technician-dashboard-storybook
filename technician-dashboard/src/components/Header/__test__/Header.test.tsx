import { render } from '@testing-library/react';

import Header from '..';

describe('Header test cases', () => {
  const props = {
    user: {
      name: 'Belle',
      avatar: '/assets/images/empty-avatar.svg',
    },
    title: 'Product & Services',
  };

  test('should render correctly', () => {
    const { container } = render(<Header {...props} />);
    expect(container).toMatchSnapshot();
  });
});
