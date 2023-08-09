import userEvent from '@testing-library/user-event';
import { Button } from '.';
const { render, screen } = require('@testing-library/react');
describe('<Button />', () => {
  it('should render the button with text "Load More"', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect.assertions(1);
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click"', () => {
    const fn = jest.fn();

    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should should be disabled when disable is true"', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should should be disabled when disable is false"', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it('should match snapshot"', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" disabled={false} onClick={fn} />);
    expect(container).toMatchSnapshot();
  });
});
