import { render } from '@testing-library/react';

import ConfirmModal from '..';

const onSubmit = jest.fn();
const onClose = jest.fn();

describe('ConfirmModal component', () => {
  const props = {
    isOpen: true,
    title: 'Confirm modal',
    description: 'Are you sure to delete it?',
    onClose,
    onSubmit,
  };

  it('it matches the snapshot', () => {
    const dom = render(<ConfirmModal {...props} />);
    expect(dom).toMatchSnapshot();
  });
});
