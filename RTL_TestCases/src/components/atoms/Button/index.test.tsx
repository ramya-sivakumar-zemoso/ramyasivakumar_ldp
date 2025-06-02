import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

describe('MUI Button Atom', () => {
  it('renders the button with text', () => {
    render(<Button>Click Me</Button>);
    expect(
      screen.getByRole('button', { name: 'Click Me' })
    ).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = () => {
      handleClick.called = true;
    };
    handleClick.called = false;

    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick.called).toBe(true);
  });

  it('renders a disabled button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
