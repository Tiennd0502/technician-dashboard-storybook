import { render } from '@testing-library/react';

import { SERVICES } from '@/lib/__mocks__';
import ServiceList from '..';

describe('ServiceList test cases', () => {
  const props = {
    list: SERVICES,
  };

  test('should render correctly', () => {
    const { container } = render(<ServiceList {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render enough elements', () => {
    const { getByTestId } = render(<ServiceList {...props} />);
    const serviceList = getByTestId('list-services');

    expect(serviceList.childNodes).toHaveLength(SERVICES.length);
  });

  test('Should render empty elements', () => {
    const { getByTestId } = render(<ServiceList list={[]} />);
    const serviceList = getByTestId('list-services');

    expect(serviceList.childNodes).toHaveLength(0);
  });
});
