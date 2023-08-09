import { render, screen } from '@testing-library/react';
import { TextInput } from '.';
import userEvent from '@testing-library/user-event';

describe('<TextInput />', () => {
  it('should have a value of searcValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="testando" />);
    const input = screen.getByPlaceholderText(/Type your search/i);
    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on eah key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="digite qualquer valor" />);

    const input = screen.getByPlaceholderText(/Type your search/i);

    const value = 'procurando';

    userEvent.type(input, value);

    expect(input.value).toBe('digite qualquer valor');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match SNAPSHOT', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue="" />);
    expect(container).toMatchSnapshot();
  });
});
