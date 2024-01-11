import { render } from '@testing-library/react';

import { CURRENCY_CHARACTERS, SERVICES } from '@/lib/constants';

import ServiceCard from '..';

describe('ServiceCard test cases', () => {
  const props = {
    service: SERVICES[0],
    currencyCharacter: CURRENCY_CHARACTERS.EURO,
  };

  test('should render correctly', () => {
    const { container } = render(<ServiceCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
