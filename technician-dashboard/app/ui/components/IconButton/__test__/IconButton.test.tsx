import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

// component
import IconButton from '..';

describe('IconButton test cases', () => {
  const onClick = jest.fn();
  const props = {
    'aria-label': 'Notifications',
    onClick,
  };

  it('should render correctly', () => {
    const { container } = render(<IconButton {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should render with isActivated true', () => {
    const { container } = render(<IconButton isActive {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('render without onClick', async () => {
    const { getByTestId } = render(<IconButton {...props} />);
    const iconButton = getByTestId('icon-button-component');
    expect(iconButton).toBeInTheDocument();
  });

  it('calls onClick when being clicked', async () => {
    const { getByTestId } = render(<IconButton {...props} />);
    const changeTheme = getByTestId('icon-button');

    fireEvent.click(changeTheme);

    expect(onClick).toHaveBeenCalled();
  });
});
