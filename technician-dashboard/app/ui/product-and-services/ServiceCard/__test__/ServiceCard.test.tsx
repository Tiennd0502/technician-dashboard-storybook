import { render } from '@testing-library/react';

import { SERVICE } from '@/lib/__mocks__';
import { CURRENCY_CHARACTERS } from '@/lib/constants';

import ServiceCard from '..';

describe('ServiceCard test cases', () => {
  const props = {
    service: SERVICE,
    currencyCharacter: CURRENCY_CHARACTERS.EURO,
  };

  test('should render correctly', () => {
    const { container } = render(<ServiceCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
