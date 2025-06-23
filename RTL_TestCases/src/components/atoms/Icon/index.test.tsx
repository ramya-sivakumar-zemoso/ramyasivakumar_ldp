import { render, screen } from '@testing-library/react';
import MUIIcon from '.';
import '@testing-library/jest-dom';

describe('MUIIcon component', () => {
  test('renders with given children (icon name)', () => {
    render(<MUIIcon>home</MUIIcon>);
    const iconElement = screen.getByText('home');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement.tagName.toLowerCase()).toBe('span');
  });

  test('applies MUI props correctly (color, fontSize)', () => {
    const { container } = render(
      <MUIIcon color="primary" fontSize="large">
        home
      </MUIIcon>
    );
    const iconElement = screen.getByText('home');
    expect(iconElement).toHaveClass('MuiIcon-colorPrimary');
    expect(iconElement).toHaveClass('MuiIcon-fontSizeLarge');
    expect(container.firstChild).toMatchSnapshot(); // Optional snapshot
  });

  test('passes arbitrary props (like aria-label)', () => {
    render(<MUIIcon aria-label="home-icon">home</MUIIcon>);
    const iconElement = screen.getByLabelText('home-icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('renders correctly with different icons', () => {
    render(<MUIIcon>star</MUIIcon>);
    expect(screen.getByText('star')).toBeInTheDocument();
  });
});
