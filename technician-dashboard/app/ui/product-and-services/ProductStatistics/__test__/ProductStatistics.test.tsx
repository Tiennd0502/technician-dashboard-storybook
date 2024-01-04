import { render } from '@testing-library/react';

import ProductStatistics from '..';

describe('ProductStatistics test cases', () => {
  test('should render correctly', () => {
    const { container } = render(<ProductStatistics />);
    expect(container).toMatchSnapshot();
  });
});
