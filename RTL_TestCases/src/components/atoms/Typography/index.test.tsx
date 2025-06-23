import { render, screen } from '@testing-library/react';
import Typography from '.';

describe('Typography Atom', () => {
  it('renders the passed children text', () => {
    render(<Typography variant="h6">Hello Typography</Typography>);
    expect(screen.getByText('Hello Typography')).toBeInTheDocument();
  });

  it('applies the correct variant', () => {
    const { container } = render(<Typography variant="h2">Header</Typography>);
    const h2Element = container.querySelector('h2');
    expect(h2Element).toBeTruthy();
    expect(h2Element?.textContent).toBe('Header');
  });
});
