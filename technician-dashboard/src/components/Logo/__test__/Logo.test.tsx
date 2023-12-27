import { render } from '@testing-library/react';

import Logo from '../index';

test('should render correctly', () => {
  const { container } = render(<Logo />);

  expect(container).toMatchSnapshot();
});
