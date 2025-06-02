import { render, screen } from '@testing-library/react';
import TextLink from '.';
import '@testing-library/jest-dom';

describe('TextLink atom', () => {
  test('renders with given text', () => {
    render(<TextLink href="https://example.com">Visit Example</TextLink>);
    const link = screen.getByText('Visit Example');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  test('applies MUI styles like underline on hover', () => {
    render(<TextLink href="#">Test Link</TextLink>);
    const link = screen.getByText('Test Link');
    expect(link).toHaveClass('MuiLink-underlineHover');
  });

  test('passes arbitrary props like target and rel', () => {
    render(
      <TextLink
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        External Link
      </TextLink>
    );
    const link = screen.getByText('External Link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
