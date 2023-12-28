import { render } from '@testing-library/react';

import Spinner from '..';

describe('Spinner test cases', () => {
  test('should render correctly', () => {
    const { container } = render(<Spinner />);

    expect(container).toMatchSnapshot();
  });
});
