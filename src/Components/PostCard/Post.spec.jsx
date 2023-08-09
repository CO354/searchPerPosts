import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', 'img/imga1.png');

    expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument();

    expect(screen.getByText('body', { name: 'title 1 1' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);

    expect(container).toMatchSnapshot();
  });
});
