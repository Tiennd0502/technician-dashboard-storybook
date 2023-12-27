import { render } from '@testing-library/react';

import { STATUS } from '@/interfaces';

import StatusLabel from '..';

describe('StatusLabel component', () => {
  test('should render correctly', () => {
    const { container } = render(<StatusLabel value={STATUS.Activated} />);

    expect(container).toMatchSnapshot();
  });

  test('should renders with status Activated', () => {
    const { getByTestId } = render(<StatusLabel value={STATUS.Activated} />);
    const text = getByTestId('status-value').textContent;

    expect(text).toEqual(STATUS[STATUS.Activated]);
  });

  test('should renders with status Deactivated', () => {
    const { getByTestId } = render(<StatusLabel value={STATUS.Deactivated} />);
    const text = getByTestId('status-value').textContent;

    expect(text).toEqual(STATUS[STATUS.Deactivated]);
  });
});
