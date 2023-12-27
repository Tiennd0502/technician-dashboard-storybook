import { render } from '@testing-library/react';

import Technician from '..';

describe('Technician test cases', () => {
  test('should render correctly', () => {
    const { container } = render(<Technician />);
    expect(container).toMatchSnapshot();
  });
});
